import type { Meta, StoryObj } from "@storybook/react"
import { ChatAudio } from "../src/components/ui/chat-audio"

const meta: Meta<typeof ChatAudio> = {
  title: "Components/ChatAudio",
  component: ChatAudio,
  argTypes: {
    variant: {
      control: "select",
      options: ["sent", "received"],
    },
    visualizer: {
      control: "select",
      options: ["waveform", "progress"],
    },
    status: {
      control: "select",
      options: ["uploading", "complete", "error"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatAudio>

export const Received: Story = {
  args: {
    variant: "received",
    src: "#",
    duration: 45,
  },
}

export const Sent: Story = {
  args: {
    variant: "sent",
    src: "#",
    duration: 32,
  },
}

export const WithTranscription: Story = {
  args: {
    variant: "received",
    src: "#",
    duration: 60,
    transcription: "Patient reports improvement in mobility after two weeks of physical therapy. Pain levels decreased from 7 to 3 on the scale.",
    defaultShowTranscription: true,
  },
}
