import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup, RadioGroupItem } from "../src/components/ui/radio-group"
import { Label } from "../src/components/ui/label"

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  argTypes: {
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">Consulta presencial</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">Teleconsulta</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">Visita domiciliar</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-3">
      <Label>Prioridade do Paciente</Label>
      <RadioGroup defaultValue="normal">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="urgent" id="priority-urgent" />
          <Label htmlFor="priority-urgent">Urgente</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="normal" id="priority-normal" />
          <Label htmlFor="priority-normal">Normal</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="low" id="priority-low" />
          <Label htmlFor="priority-low">Baixa</Label>
        </div>
      </RadioGroup>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="disabled-1" />
        <Label htmlFor="disabled-1">Dr. Ana Costa</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="disabled-2" />
        <Label htmlFor="disabled-2">Dr. Carlos Mendes</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="disabled-3" />
        <Label htmlFor="disabled-3">Dr. Paula Santos</Label>
      </div>
    </RadioGroup>
  ),
}
