import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "../src/components/ui/textarea"
import { Label } from "../src/components/ui/label"

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {},
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Descreva os sintomas do paciente...",
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
    <div className="space-y-2 max-w-md">
      <Label htmlFor="clinical-notes">Notas Clínicas</Label>
      <Textarea
        id="clinical-notes"
        placeholder="Registre as observações da consulta de Maria Silva..."
      />
    </div>
  ),
}
