"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { SequenceTimeline } from "@/lib/campaigns/types-v2"

interface SequenceTimelineGanttProps {
  timeline: SequenceTimeline
  audienceSize: number
  messageCount: number
}

// Using chart color tokens from design system
const colorClasses = {
  primary: "bg-[var(--chart-1)]",
  secondary: "bg-[var(--chart-2)]",
  tertiary: "bg-[var(--chart-3)]",
}

export function SequenceTimelineGantt({
  timeline,
  audienceSize,
  messageCount,
}: SequenceTimelineGanttProps) {
  // Calculate the total range for positioning bars
  const firstDate = new Date(timeline.waves[0]?.startDate ?? new Date())
  const lastDate = new Date(timeline.waves[timeline.waves.length - 1]?.endDate ?? new Date())
  const totalDays = Math.max(1, Math.ceil((lastDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)))

  const getBarPosition = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const startOffset = Math.ceil((start.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24))
    const duration = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)))

    return {
      left: `${(startOffset / totalDays) * 100}%`,
      width: `${Math.max(5, (duration / totalDays) * 100)}%`,
    }
  }

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    return `${start.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })} - ${end.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}`
  }

  return (
    <Card className="shadow-[var(--shadow-sm)] transition-nilo">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">
          Timeline da Campanha
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          {audienceSize.toLocaleString("pt-BR")} pacientes • {messageCount} mensagens cada •{" "}
          ~{timeline.totalMessages.toLocaleString("pt-BR")} mensagens totais
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Gantt Chart */}
        <div className="space-y-4">
          {timeline.waves.map((wave) => {
            const position = getBarPosition(wave.startDate, wave.endDate)
            return (
              <div key={wave.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium w-8">{wave.label}</span>
                  <span className="text-xs text-muted-foreground">{wave.description}</span>
                </div>
                <div className="relative h-6 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`absolute h-full rounded-full ${colorClasses[wave.color]} opacity-80`}
                    style={{ left: position.left, width: position.width }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatDateRange(wave.startDate, wave.endDate)}</span>
                  <span>{wave.messageCount.toLocaleString("pt-BR")} msgs</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <div className="border-t pt-4 space-y-2">
          <p className="text-sm font-medium">Resumo</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Duração total da campanha:</div>
            <div className="font-medium">{timeline.totalDuration} dias</div>

            <div className="text-muted-foreground">Envios iniciais:</div>
            <div className="font-medium">{timeline.initialSendsRange}</div>

            <div className="text-muted-foreground">Último follow-up completo:</div>
            <div className="font-medium">{timeline.lastFollowupDate}</div>

            <div className="text-muted-foreground">Total de mensagens (pior caso):</div>
            <div className="font-medium">~{timeline.totalMessages.toLocaleString("pt-BR")}</div>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}
