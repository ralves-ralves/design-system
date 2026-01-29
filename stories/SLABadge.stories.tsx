import type { Meta, StoryObj } from "@storybook/react"
import { SLABadge } from "../src/components/ui/sla-badge"

const meta: Meta<typeof SLABadge> = {
  title: "Components/SLABadge",
  component: SLABadge,
  argTypes: {
    variant: {
      control: "select",
      options: ["critical", "warning", "ok"],
    },
  },
}

export default meta
type Story = StoryObj<typeof SLABadge>

export const Default: Story = {
  args: {
    variant: "ok",
    children: "On Track",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <SLABadge variant="critical">Overdue</SLABadge>
      <SLABadge variant="warning">At Risk</SLABadge>
      <SLABadge variant="ok">On Track</SLABadge>
    </div>
  ),
}
