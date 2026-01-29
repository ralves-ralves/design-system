import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "../src/components/ui/switch"
import { Label } from "../src/components/ui/label"

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ai"],
    },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    variant: "default",
  },
}

export const AIVariant: Story = {
  args: {
    variant: "ai",
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" />
      <Label htmlFor="notifications">Notificar Dr. Ana Costa sobre atualizações</Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="switch-default" variant="default" />
        <Label htmlFor="switch-default">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="switch-ai" variant="ai" />
        <Label htmlFor="switch-ai">AI</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="switch-disabled" disabled />
        <Label htmlFor="switch-disabled">Disabled</Label>
      </div>
    </div>
  ),
}
