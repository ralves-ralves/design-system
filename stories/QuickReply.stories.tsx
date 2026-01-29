import type { Meta, StoryObj } from "@storybook/react"
import { QuickReply, QuickReplyGroup } from "../src/components/ui/quick-reply"

const meta: Meta<typeof QuickReply> = {
  title: "Components/QuickReply",
  component: QuickReply,
}

export default meta
type Story = StoryObj<typeof QuickReply>

export const Default: Story = {
  render: () => (
    <QuickReplyGroup>
      <QuickReply>Schedule follow-up</QuickReply>
      <QuickReply>Request lab work</QuickReply>
      <QuickReply>Send prescription</QuickReply>
      <QuickReply>Refer to specialist</QuickReply>
    </QuickReplyGroup>
  ),
}
