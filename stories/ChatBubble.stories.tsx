import type { Meta, StoryObj } from "@storybook/react"
import {
  ChatBubble,
  ChatBubbleGroup,
  ChatBubbleTime,
  DateSeparator,
  SystemMessage,
} from "../src/components/ui/chat-bubble"

const meta: Meta<typeof ChatBubble> = {
  title: "Components/ChatBubble",
  component: ChatBubble,
  argTypes: {
    variant: {
      control: "select",
      options: ["sent", "received", "professional"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatBubble>

export const Sent: Story = {
  args: {
    variant: "sent",
    children: "I have been feeling much better since starting the new medication.",
  },
}

export const Received: Story = {
  args: {
    variant: "received",
    children: "That is great to hear! How is your sleep quality?",
  },
}

export const Professional: Story = {
  args: {
    variant: "professional",
    children: "Based on your latest lab results, your levels are within the normal range.",
  },
}

export const WithTime: Story = {
  render: () => (
    <ChatBubbleGroup align="end">
      <ChatBubble variant="sent">
        I took my blood pressure reading this morning.
      </ChatBubble>
      <ChatBubbleTime status="read">10:32 AM</ChatBubbleTime>
    </ChatBubbleGroup>
  ),
}

export const Conversation: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-lg">
      <DateSeparator>January 28, 2026</DateSeparator>

      <ChatBubbleGroup align="start">
        <ChatBubble variant="received">
          Good morning! How are you feeling today?
        </ChatBubble>
        <ChatBubbleTime>9:00 AM</ChatBubbleTime>
      </ChatBubbleGroup>

      <ChatBubbleGroup align="end">
        <ChatBubble variant="sent">
          Hi Dr. Silva! I have been doing well. The headaches have reduced significantly.
        </ChatBubble>
        <ChatBubble variant="sent">
          I have been taking the medication as prescribed.
        </ChatBubble>
        <ChatBubbleTime status="read">9:02 AM</ChatBubbleTime>
      </ChatBubbleGroup>

      <SystemMessage>Dr. Silva shared a document</SystemMessage>

      <ChatBubbleGroup align="start">
        <ChatBubble variant="received">
          Wonderful progress! I am attaching your updated care plan. Please review it before our next appointment.
        </ChatBubble>
        <ChatBubbleTime channel="WhatsApp">9:05 AM</ChatBubbleTime>
      </ChatBubbleGroup>

      <ChatBubbleGroup align="end">
        <ChatBubble variant="sent">
          Thank you, I will take a look right away.
        </ChatBubble>
        <ChatBubbleTime status="delivered">9:06 AM</ChatBubbleTime>
      </ChatBubbleGroup>
    </div>
  ),
}

export const SystemMessageStory: Story = {
  name: "SystemMessage",
  render: () => (
    <div className="max-w-lg">
      <SystemMessage>Patient was transferred to Dr. Oliveira</SystemMessage>
    </div>
  ),
}
