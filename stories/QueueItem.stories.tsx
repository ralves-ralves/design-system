import type { Meta, StoryObj } from "@storybook/react"
import { QueueItem, QueueList } from "../src/components/ui/queue-item"

const meta: Meta<typeof QueueItem> = {
  title: "Components/QueueItem",
  component: QueueItem,
  argTypes: {
    active: { control: "boolean" },
    dotVariant: {
      control: "select",
      options: ["critical", "warning", "ok", "neutral", "none"],
    },
  },
}

export default meta
type Story = StoryObj<typeof QueueItem>

export const Default: Story = {
  args: {
    children: "Unassigned patients",
    count: 5,
  },
}

export const AllDotVariants: Story = {
  render: () => (
    <div className="w-64 border border-border rounded-lg overflow-hidden">
      <QueueList>
        <QueueItem dotVariant="critical" count={8}>
          Critical priority
        </QueueItem>
        <QueueItem dotVariant="warning" count={14}>
          Pending follow-ups
        </QueueItem>
        <QueueItem dotVariant="ok" count={23}>
          Stable patients
        </QueueItem>
        <QueueItem dotVariant="neutral" count={3}>
          Archived cases
        </QueueItem>
        <QueueItem dotVariant="none" count={42}>
          All conversations
        </QueueItem>
      </QueueList>
    </div>
  ),
}

export const Active: Story = {
  args: {
    children: "My patients",
    active: true,
    count: 7,
    dotVariant: "ok",
  },
}

export const WithCount: Story = {
  args: {
    children: "Awaiting triage",
    count: 12,
    dotVariant: "warning",
  },
}
