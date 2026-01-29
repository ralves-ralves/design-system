import type { Meta, StoryObj } from "@storybook/react"
import { MultiSelect } from "../src/components/ui/multi-select"
import type { MultiSelectOption } from "../src/components/ui/multi-select"

const specialtyOptions: MultiSelectOption[] = [
  { value: "general", label: "Clínica Geral" },
  { value: "family", label: "Medicina de Família" },
  { value: "pediatrics", label: "Pediatria" },
  { value: "psychology", label: "Psicologia" },
  { value: "psychiatry", label: "Psiquiatria" },
  { value: "cardiology", label: "Cardiologia" },
  { value: "endocrinology", label: "Endocrinologia" },
  { value: "neurology", label: "Neurologia" },
  { value: "dermatology", label: "Dermatologia" },
  { value: "orthopedics", label: "Ortopedia" },
]

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
}

export default meta
type Story = StoryObj<typeof MultiSelect>

export const Default: Story = {
  render: () => (
    <div className="w-[360px]">
      <MultiSelect
        options={specialtyOptions}
        placeholder="Selecione as especialidades..."
        searchPlaceholder="Buscar especialidade..."
        emptyMessage="Nenhuma especialidade encontrada"
      />
    </div>
  ),
}

export const WithDefaultValues: Story = {
  render: () => (
    <div className="w-[360px]">
      <MultiSelect
        options={specialtyOptions}
        defaultValue={["psychology", "psychiatry", "neurology"]}
        placeholder="Selecione as especialidades..."
        searchPlaceholder="Buscar especialidade..."
      />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[360px]">
      <MultiSelect
        options={specialtyOptions}
        defaultValue={["general", "pediatrics"]}
        placeholder="Selecione as especialidades..."
        disabled
      />
    </div>
  ),
}
