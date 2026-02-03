"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { workHours, daysOfMonth, getAvailableMonths } from "@/lib/campaigns/data-v2"
import type { MonthlyConfig as MonthlyConfigType } from "@/lib/campaigns/types-v2"

interface MonthlyConfigProps {
  config: Partial<MonthlyConfigType>
  audienceSize: number
  onChange: (config: Partial<MonthlyConfigType>) => void
}

// Calculate distribution for monthly config
function calculateDistribution(
  dayOfMonth: number,
  startMonth: string,
  audienceSize: number,
  sendsPerDay: number
) {
  // How many days needed per month to send all patients
  const daysPerMonth = Math.ceil(audienceSize / sendsPerDay)
  const monthsNeeded = Math.max(1, daysPerMonth) // At least 1 month

  // Calculate send dates
  const [year, month] = startMonth.split("-").map(Number)
  const sendDates: string[] = []

  for (let i = 0; i < Math.min(monthsNeeded, 6); i++) {
    const date = new Date(year, month - 1 + i, dayOfMonth)
    sendDates.push(date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }))
  }

  // Calculate completion date
  const completionDate = new Date(year, month - 1 + monthsNeeded - 1, dayOfMonth)

  return {
    daysPerMonth,
    monthsNeeded,
    sendDates,
    completionDate: completionDate.toLocaleDateString("pt-BR"),
  }
}

export function MonthlyConfig({ config, audienceSize, onChange }: MonthlyConfigProps) {
  const availableMonths = getAvailableMonths()

  const distribution =
    config.dayOfMonth && config.startMonth && config.sendsPerDay
      ? calculateDistribution(config.dayOfMonth, config.startMonth, audienceSize, config.sendsPerDay)
      : null

  return (
    <Card className="shadow-[var(--shadow-sm)] transition-nilo">
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Envios por dia</Label>
            <Input
              type="number"
              min={1}
              max={audienceSize}
              placeholder="Ex: 500"
              value={config.sendsPerDay ?? ""}
              onChange={(e) => onChange({ ...config, sendsPerDay: parseInt(e.target.value) || 0 })}
            />
          </div>
          <div className="space-y-2">
            <Label>Dia do mes</Label>
            <Select
              value={config.dayOfMonth?.toString() ?? ""}
              onValueChange={(value) => onChange({ ...config, dayOfMonth: parseInt(value) })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Dia..." />
              </SelectTrigger>
              <SelectContent>
                {daysOfMonth.map((day) => (
                  <SelectItem key={day} value={day.toString()}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Horario</Label>
            <Select
              value={config.startTime ?? ""}
              onValueChange={(value) => onChange({ ...config, startTime: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                {workHours.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">GMT-3</p>
          </div>
          <div className="space-y-2">
            <Label>A partir de</Label>
            <Select
              value={config.startMonth ?? ""}
              onValueChange={(value) => onChange({ ...config, startMonth: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Mes..." />
              </SelectTrigger>
              <SelectContent>
                {availableMonths.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Calculated distribution summary */}
        {distribution && config.startTime && config.sendsPerDay && (
          <div className="border-t pt-4 space-y-1 text-sm animate-in fade-in-0 slide-in-from-top-2 duration-300">
            <p className="font-medium">Distribuicao calculada:</p>
            <p className="text-muted-foreground">
              • {config.sendsPerDay.toLocaleString("pt-BR")} envios/dia
            </p>
            <p className="text-muted-foreground">
              • Datas de envio: {distribution.sendDates.join(", ")}{distribution.monthsNeeded > 6 ? "..." : ""}
            </p>
            <p className="text-muted-foreground">
              • Envios iniciais completos ate: {distribution.completionDate}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
