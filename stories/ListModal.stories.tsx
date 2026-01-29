import type { Meta, StoryObj } from "@storybook/react"
import { ListModal } from "../src/components/ui/modal"
import { Button } from "../src/components/ui/button"

const providers = [
  {
    id: "1",
    label: "Dr. Ana Costa",
    description: "Psychiatrist - Mental Health",
  },
  {
    id: "2",
    label: "Dr. Carlos Mendes",
    description: "Psychologist - Cognitive Behavioral Therapy",
  },
  {
    id: "3",
    label: "Dr. Beatriz Lima",
    description: "Nutritionist - Clinical Nutrition",
  },
  {
    id: "4",
    label: "Dr. Rafael Souza",
    description: "Physiotherapist - Rehabilitation",
  },
  {
    id: "5",
    label: "Dr. Juliana Ferreira",
    description: "General Practitioner - Primary Care",
  },
]

const meta: Meta<typeof ListModal> = {
  title: "Components/ListModal",
  component: ListModal,
  argTypes: {
    multiple: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof ListModal>

export const SingleSelect: Story = {
  args: {
    title: "Select Provider",
    description: "Choose a healthcare provider for this patient.",
    items: providers,
    searchPlaceholder: "Search providers...",
    trigger: <Button>Select Provider</Button>,
  },
}

export const MultiSelect: Story = {
  args: {
    multiple: true,
    title: "Assign Care Team",
    description:
      "Select the providers who will be part of this patient's care team.",
    items: providers,
    searchPlaceholder: "Search providers...",
    confirmLabel: "Assign Team",
    trigger: <Button>Assign Care Team</Button>,
  },
}
