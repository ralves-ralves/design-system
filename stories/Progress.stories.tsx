import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "../src/components/ui/progress"

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 60,
  },
}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Full: Story = {
  args: {
    value: 100,
  },
}

export const AllValues: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">25%</span>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">50%</span>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">75%</span>
        <Progress value={75} />
      </div>
    </div>
  ),
}
