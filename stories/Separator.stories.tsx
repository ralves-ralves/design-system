import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "../src/components/ui/separator"

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    decorative: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-[400px]">
      <Separator {...args} />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <span>Patient</span>
      <Separator orientation="vertical" />
      <span>Appointments</span>
      <Separator orientation="vertical" />
      <span>Medications</span>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className="w-[400px] space-y-1">
      <h4 className="text-sm font-medium leading-none">Maria Silva</h4>
      <p className="text-sm text-muted-foreground">
        Patient of Dr. Ana Costa
      </p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <span>Overview</span>
        <Separator orientation="vertical" />
        <span>Appointments</span>
        <Separator orientation="vertical" />
        <span>Medications</span>
      </div>
    </div>
  ),
}
