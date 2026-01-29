import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "../src/components/ui/input"
import { Label } from "../src/components/ui/label"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "date"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: "text",
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Nome do paciente...",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Campo desabilitado",
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="patient-name">Nome do Paciente</Label>
      <Input id="patient-name" placeholder="Maria Silva" />
    </div>
  ),
}

export const AllTypes: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="input-email">Email</Label>
        <Input id="input-email" type="email" placeholder="maria.silva@nilo.health" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="input-password">Senha</Label>
        <Input id="input-password" type="password" placeholder="••••••••" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="input-number">Idade</Label>
        <Input id="input-number" type="number" placeholder="32" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="input-search">Buscar Paciente</Label>
        <Input id="input-search" type="search" placeholder="Buscar por nome..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="input-date">Data da Consulta</Label>
        <Input id="input-date" type="date" />
      </div>
    </div>
  ),
}
