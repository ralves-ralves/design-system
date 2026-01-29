import type { Meta, StoryObj } from "@storybook/react"
import { FormModal } from "../src/components/ui/modal"
import { Button } from "../src/components/ui/button"
import { Input } from "../src/components/ui/input"
import { Label } from "../src/components/ui/label"

const meta: Meta<typeof FormModal> = {
  title: "Components/FormModal",
  component: FormModal,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof FormModal>

export const Default: Story = {
  args: {
    title: "Add Patient",
    description: "Enter the new patient's information below.",
    trigger: <Button>Add Patient</Button>,
    children: (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="patient-name">Full Name</Label>
          <Input id="patient-name" placeholder="e.g. Maria Silva" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="patient-email">Email</Label>
          <Input
            id="patient-email"
            type="email"
            placeholder="maria.silva@example.com"
          />
        </div>
      </div>
    ),
  },
}
