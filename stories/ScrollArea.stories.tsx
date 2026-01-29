import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea, ScrollBar } from "../src/components/ui/scroll-area"
import { Separator } from "../src/components/ui/separator"

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const patientNames = [
  "Maria Silva",
  "Carlos Oliveira",
  "Beatriz Santos",
  "Rafael Mendes",
  "Juliana Ferreira",
  "Pedro Almeida",
  "Ana Paula Souza",
  "Lucas Pereira",
  "Fernanda Lima",
  "Gabriel Costa",
  "Mariana Rocha",
  "Thiago Martins",
  "Camila Ribeiro",
  "Diego Nascimento",
  "Larissa Barbosa",
]

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[250px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          Patients of Dr. Ana Costa
        </h4>
        {patientNames.map((name, index) => (
          <div key={name}>
            <div className="text-sm">{name}</div>
            {index < patientNames.length - 1 && (
              <Separator className="my-2" />
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-[400px] whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {patientNames.map((name) => (
          <div
            key={name}
            className="flex w-[150px] shrink-0 flex-col items-center justify-center rounded-md border p-4"
          >
            <span className="text-sm font-medium">{name}</span>
            <span className="text-xs text-muted-foreground">Patient</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
