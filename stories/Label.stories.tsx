import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "../src/components/ui/label"
import { Input } from "../src/components/ui/input"

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: "Nome do Paciente",
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="patient-email">Email do Paciente</Label>
      <Input id="patient-email" type="email" placeholder="maria.silva@email.com" />
    </div>
  ),
}
