import type { Meta, StoryObj } from "@storybook/react"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "../src/components/ui/select"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecione o profissional" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ana-costa">Dr. Ana Costa</SelectItem>
        <SelectItem value="carlos-mendes">Dr. Carlos Mendes</SelectItem>
        <SelectItem value="paula-santos">Dr. Paula Santos</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecione a especialidade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Atenção Primária</SelectLabel>
          <SelectItem value="general">Clínica Geral</SelectItem>
          <SelectItem value="family">Medicina de Família</SelectItem>
          <SelectItem value="pediatrics">Pediatria</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Saúde Mental</SelectLabel>
          <SelectItem value="psychology">Psicologia</SelectItem>
          <SelectItem value="psychiatry">Psiquiatria</SelectItem>
          <SelectItem value="therapy">Terapia Ocupacional</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Especialidades</SelectLabel>
          <SelectItem value="cardiology">Cardiologia</SelectItem>
          <SelectItem value="endocrinology">Endocrinologia</SelectItem>
          <SelectItem value="neurology">Neurologia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecione o profissional" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ana-costa">Dr. Ana Costa</SelectItem>
      </SelectContent>
    </Select>
  ),
}
