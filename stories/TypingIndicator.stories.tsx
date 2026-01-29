import type { Meta, StoryObj } from "@storybook/react"
import { TypingIndicator } from "../src/components/ui/typing-indicator"
import { Avatar, AvatarFallback } from "../src/components/ui/avatar"

const meta: Meta<typeof TypingIndicator> = {
  title: "Components/TypingIndicator",
  component: TypingIndicator,
}

export default meta
type Story = StoryObj<typeof TypingIndicator>

export const Default: Story = {
  args: {},
}

export const WithAvatar: Story = {
  args: {
    avatar: (
      <Avatar className="w-6 h-6">
        <AvatarFallback className="text-[10px]">AC</AvatarFallback>
      </Avatar>
    ),
  },
}
