import type { Meta, StoryObj } from "@storybook/react"
import { ChatImage } from "../src/components/ui/chat-image"

const meta: Meta<typeof ChatImage> = {
  title: "Components/ChatImage",
  component: ChatImage,
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
type Story = StoryObj<typeof ChatImage>

export const Received: Story = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "Medical scan",
    variant: "received",
    width: 300,
    height: 200,
  },
}

export const Sent: Story = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "Wound progress photo",
    variant: "sent",
    width: 300,
    height: 200,
  },
}

export const WithCaption: Story = {
  args: {
    src: "https://placehold.co/300x200",
    alt: "X-ray image",
    variant: "received",
    width: 300,
    height: 200,
    caption: "X-ray results from 01/15",
  },
}
