import type { CampaignObjective, CampaignTemplate, AudienceValidation } from "./types"

// Objective definitions
export const objectives: {
  id: CampaignObjective
  name: string
  description: string
  icon: string
}[] = [
  {
    id: "preventive_care",
    name: "Cuidado Preventivo",
    description: "Envie lembretes de exames preventivos e check-ups regulares",
    icon: "Heart",
  },
  {
    id: "appointment_reminder",
    name: "Lembrete de Consulta",
    description: "Confirme e lembre pacientes sobre consultas agendadas",
    icon: "Calendar",
  },
  {
    id: "lab_results",
    name: "Resultados de Exames",
    description: "Notifique pacientes sobre resultados de exames disponíveis",
    icon: "FileText",
  },
  {
    id: "treatment_followup",
    name: "Acompanhamento",
    description: "Acompanhe pacientes após procedimentos ou tratamentos",
    icon: "ClipboardList",
  },
  {
    id: "patient_onboarding",
    name: "Boas-vindas",
    description: "Receba novos pacientes com informações e orientações",
    icon: "UserCheck",
  },
  {
    id: "general_announcement",
    name: "Comunicado Geral",
    description: "Envie comunicados gerais para sua base de pacientes",
    icon: "Megaphone",
  },
]

// Campaign templates organized by objective
export const campaignsByObjective: Record<CampaignObjective, CampaignTemplate[]> = {
  preventive_care: [
    {
      id: "prev-checkup",
      name: "Campanha de Check-up Anual",
      messages: [
        { id: "m1", day: 0, label: "D0 - Inicial", content: "Olá {nome}, está na hora do seu check-up anual! Agende sua consulta." },
        { id: "m2", day: 5, label: "D5 - Follow-up", content: "Olá {nome}, você já agendou seu check-up? Estamos disponíveis para ajudar." },
        { id: "m3", day: 12, label: "D12 - Lembrete", content: "Olá {nome}, último lembrete: seu check-up anual é importante para sua saúde." },
      ],
    },
  ],
  appointment_reminder: [
    {
      id: "appt-reminder",
      name: "Lembrete de Consulta Padrão",
      messages: [
        { id: "m1", day: 0, label: "D0 - Confirmação", content: "Olá {nome}, sua consulta está agendada para {data}. Confirme sua presença." },
        { id: "m2", day: 1, label: "D1 - Lembrete", content: "Olá {nome}, sua consulta é amanhã! Não se esqueça." },
      ],
    },
  ],
  lab_results: [
    {
      id: "lab-notification",
      name: "Notificação de Resultados",
      messages: [
        { id: "m1", day: 0, label: "D0 - Notificação", content: "Olá {nome}, seus resultados de exames estão disponíveis. Acesse pelo app." },
        { id: "m2", day: 3, label: "D3 - Follow-up", content: "Olá {nome}, você já verificou seus resultados? Em caso de dúvidas, fale conosco." },
      ],
    },
  ],
  treatment_followup: [
    {
      id: "treatment-fu",
      name: "Acompanhamento Pós-Procedimento",
      messages: [
        { id: "m1", day: 0, label: "D0 - Pós-procedimento", content: "Olá {nome}, como você está se sentindo após o procedimento?" },
        { id: "m2", day: 7, label: "D7 - Verificação", content: "Olá {nome}, já faz uma semana. Como está sua recuperação?" },
        { id: "m3", day: 30, label: "D30 - Retorno", content: "Olá {nome}, agende seu retorno para avaliação." },
      ],
    },
  ],
  patient_onboarding: [
    {
      id: "onboarding-welcome",
      name: "Boas-vindas ao Paciente",
      messages: [
        { id: "m1", day: 0, label: "D0 - Boas-vindas", content: "Bem-vindo(a) {nome}! Estamos felizes em te receber. Veja como podemos ajudar." },
        { id: "m2", day: 3, label: "D3 - Orientações", content: "Olá {nome}, conheça nossos serviços e como agendar consultas." },
      ],
    },
  ],
  general_announcement: [
    {
      id: "general-comm",
      name: "Comunicado Geral",
      messages: [
        { id: "m1", day: 0, label: "D0 - Comunicado", content: "Olá {nome}, temos uma novidade importante para você!" },
      ],
    },
  ],
}

// Simulate file validation (mock)
export function simulateFileValidation(): AudienceValidation {
  return {
    total: 2847,
    valid: 2650,
    invalid: 112,
    duplicates: 45,
    optedOut: 40,
  }
}
