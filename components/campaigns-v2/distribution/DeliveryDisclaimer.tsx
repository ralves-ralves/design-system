"use client"

import { Info } from "lucide-react"

export function DeliveryDisclaimer() {
  return (
    <p className="flex items-start gap-2 text-xs text-muted-foreground">
      <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
      <span>
        O horario agendado e quando o envio comeca. Para grandes publicos, a entrega
        pode ocorrer dentro de 15-60 minutos dependendo do volume.
      </span>
    </p>
  )
}
