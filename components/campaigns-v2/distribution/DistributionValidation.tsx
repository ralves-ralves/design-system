"use client"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle, XCircle, Info } from "lucide-react"
import type { DistributionValidation as DistributionValidationType } from "@/lib/campaigns/types-v2"

interface DistributionValidationProps {
  validation: DistributionValidationType
  onAcknowledgeWarning: () => void
  quotaWarningAcknowledged: boolean
}

export function DistributionValidation({
  validation,
  onAcknowledgeWarning,
  quotaWarningAcknowledged,
}: DistributionValidationProps) {
  // No validation issues
  if (!validation.quotaWarning && !validation.metaTierError) {
    return null
  }

  return (
    <div className="space-y-3">
      {/* Meta Tier Error - Blocking */}
      {validation.metaTierError && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Limite de Envio Excedido</AlertTitle>
          <AlertDescription className="space-y-2">
            <p>
              Esta distribuicao excede seu limite diario de envio do WhatsApp (
              {validation.metaDailyLimit?.toLocaleString("pt-BR")}/dia) e nao sera aprovada pela Meta.
            </p>
            <p>
              Por favor, reduza o volume diario escolhendo uma opcao de distribuicao diferente ou
              estendendo a duracao da campanha.
            </p>
            <div className="flex gap-4 text-sm mt-2">
              <span>
                Atual: <strong>{validation.currentDailyVolume?.toLocaleString("pt-BR")} mensagens/dia</strong>
              </span>
              <span>
                Limite: <strong>{validation.metaDailyLimit?.toLocaleString("pt-BR")} mensagens/dia</strong>
              </span>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Quota Warning - Non-blocking */}
      {validation.quotaWarning && !quotaWarningAcknowledged && (
        <Alert variant="warning">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Alerta de Cota</AlertTitle>
          <AlertDescription className="space-y-3">
            <p>
              Esta campanha usara mais mensagens do que sua cota disponivel de{" "}
              {validation.exceedsMonth} ({validation.availableQuota?.toLocaleString("pt-BR")}).
              Consulte seu executivo de conta sobre as condicoes.
              Voce pode continuar ou ajustar a distribuicao.
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={onAcknowledgeWarning}>
                Continuar mesmo assim
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Quota Warning Acknowledged */}
      {validation.quotaWarning && quotaWarningAcknowledged && (
        <Alert variant="info">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Voce reconheceu que esta campanha pode exceder a cota disponivel.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
