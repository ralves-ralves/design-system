import type { Meta, StoryObj } from "@storybook/react"
import { ChatTranscription } from "../src/components/ui/chat-transcription"

const meta: Meta<typeof ChatTranscription> = {
  title: "Components/ChatTranscription",
  component: ChatTranscription,
  argTypes: {
    variant: {
      control: "select",
      options: ["sent", "received"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatTranscription>

export const Default: Story = {
  args: {
    text: "Patient reports feeling much better after starting the new medication regimen. Blood pressure has normalized and sleep quality has improved significantly.",
    confidence: 0.95,
    language: "en",
    variant: "received",
  },
}

export const Collapsed: Story = {
  args: {
    text: "Patient describes recurring lower back pain that worsens in the morning. Physical therapy sessions have been partially effective. The patient mentions that stretching exercises recommended during the last visit have helped with mobility but have not fully resolved the discomfort. Follow-up imaging may be necessary to rule out structural issues.",
    confidence: 0.88,
    language: "en",
    variant: "received",
    collapsedLength: 50,
  },
}

export const Sent: Story = {
  args: {
    text: "I recommend increasing the dosage to 20mg daily and scheduling a follow-up in two weeks to reassess.",
    confidence: 0.92,
    language: "en",
    variant: "sent",
  },
}
