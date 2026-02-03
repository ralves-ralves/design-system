"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { workHours, getMinDate } from "@/lib/campaigns/data-v2"
import type { WeeklyConfig as WeeklyConfigType, Weekday } from "@/lib/campaigns/types-v2"

interface WeeklyConfigProps {
  config: Partial<WeeklyConfigType>
  audienceSize: number
  onChange: (config: Partial<WeeklyConfigType>) => void
}

const weekdays: { value: Weekday; label: string; short: string }[] = [
  { value: "mon", label: "Segunda", short: "Seg" },
  { value: "tue", label: "Terca", short: "Ter" },
  { value: "wed", label: "Quarta", short: "Qua" },
  { value: "thu", label: "Quinta", short: "Qui" },
  { value: "fri", label: "Sexta", short: "Sex" },
]

// Calculate distribution for weekly config
function calculateDistribution(
  startDate: string,
  selectedDays: Weekday[],
  audienceSize: number,
  sendsPerDay: number
) {
  if (selectedDays.length === 0) return null

  const totalSendDays = selectedDays.length
  const totalSendsPerWeek = sendsPerDay * totalSendDays
  const weeksNeeded = Math.ceil(audienceSize / totalSendsPerWeek)

  // Calculate completion date
  const start = new Date(startDate)
  const completionDate = new Date(start)
  completionDate.setDate(completionDate.getDate() + (weeksNeeded * 7))

  return {
    totalSendDays,
    weeksNeeded,
    selectedDaysLabel: selectedDays.map((d) => weekdays.find((w) => w.value === d)?.short).join(", "),
    completionDate: completionDate.toLocaleDateString("pt-BR"),
  }
}

export function WeeklyConfig({ config, audienceSize, onChange }: WeeklyConfigProps) {
  const minDate = getMinDate()
  const selectedDays = config.selectedDays ?? []

  const distribution = config.startDate && selectedDays.length > 0 && config.sendsPerDay
    ? calculateDistribution(config.startDate, selectedDays, audienceSize, config.sendsPerDay)
    : null

  const handleDayToggle = (day: Weekday, checked: boolean) => {
    const newDays = checked
      ? [...selectedDays, day]
      : selectedDays.filter((d) => d !== day)
    onChange({ ...config, selectedDays: newDays })
  }

  // Filter times if today is selected
  const getAvailableTimes = () => {
    if (config.startDate !== minDate) return workHours

    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()

    return workHours.filter((time) => {
      const [hours, minutes] = time.split(":").map(Number)
      return hours * 60 + minutes > currentMinutes
    })
  }

  const availableTimes = getAvailableTimes()

  return (
    <Card className="shadow-[var(--shadow-sm)] transition-nilo">
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
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
            <Label>Data de inicio</Label>
            <Input
              type="date"
              min={minDate}
              value={config.startDate ?? ""}
              onChange={(e) => onChange({ ...config, startDate: e.target.value })}
            />
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
                {availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">GMT-3</p>
          </div>
        </div>

        {/* Weekday selection */}
        <div className="space-y-2">
          <Label>Enviar em:</Label>
          <div className="flex gap-4 flex-wrap">
            {weekdays.map((day) => (
              <label key={day.value} className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={selectedDays.includes(day.value)}
                  onCheckedChange={(checked) => handleDayToggle(day.value, !!checked)}
                />
                <span className="text-sm">{day.short}</span>
              </label>
            ))}
          </div>
          {selectedDays.length === 0 && (
            <p className="text-xs text-destructive">Selecione pelo menos um dia</p>
          )}
        </div>

        {/* Calculated distribution summary */}
        {distribution && config.startTime && config.sendsPerDay && (
          <div className="border-t pt-4 space-y-1 text-sm animate-in fade-in-0 slide-in-from-top-2 duration-300">
            <p className="font-medium">Distribuicao calculada:</p>
            <p className="text-muted-foreground">
              • {config.sendsPerDay.toLocaleString("pt-BR")} envios/dia ({distribution.selectedDaysLabel})
            </p>
            <p className="text-muted-foreground">
              • {distribution.weeksNeeded} semanas de envio
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
