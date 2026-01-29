import type { Meta, StoryObj } from "@storybook/react"
import { ChatFile } from "../src/components/ui/chat-file"

const meta: Meta<typeof ChatFile> = {
  title: "Components/ChatFile",
  component: ChatFile,
  argTypes: {
    variant: {
      control: "select",
      options: ["sent", "received"],
    },
    status: {
      control: "select",
      options: ["uploading", "complete", "error"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatFile>

export const Received: Story = {
  args: {
    name: "lab-results.pdf",
    size: 2500000,
    type: "application/pdf",
    variant: "received",
    onDownload: () => {},
  },
}

export const Sent: Story = {
  args: {
    name: "prescription-2026.pdf",
    size: 1200000,
    type: "application/pdf",
    variant: "sent",
  },
}

export const Uploading: Story = {
  args: {
    name: "patient-report.docx",
    size: 3400000,
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    status: "uploading",
    progress: 45,
  },
}

export const Error: Story = {
  args: {
    name: "blood-work-results.pdf",
    size: 5100000,
    type: "application/pdf",
    status: "error",
    error: "Upload failed",
    onRetry: () => {},
  },
}
