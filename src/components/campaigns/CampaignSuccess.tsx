"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export function CampaignSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Campanha lançada!
          </h1>
          <p className="text-muted-foreground mt-2">
            Sua campanha foi criada e os envios serão realizados de acordo com a distribuição configurada.
          </p>
        </div>
        <Button variant="outline" onClick={() => window.location.reload()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para Campanhas
        </Button>
      </div>
    </div>
  )
}
