import type { Meta, StoryObj } from "@storybook/react"
import { ConfirmationModal } from "../src/components/ui/modal"
import { Button } from "../src/components/ui/button"

const meta: Meta<typeof ConfirmationModal> = {
  title: "Components/ConfirmationModal",
  component: ConfirmationModal,
  argTypes: {
    intent: {
      control: "select",
      options: ["default", "destructive", "warning", "info"],
    },
    loading: { control: "boolean" },
    hideIcon: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof ConfirmationModal>

export const Default: Story = {
  args: {
    title: "Confirm Action",
    description: "Are you sure you want to proceed with this action?",
    trigger: <Button>Open Confirmation</Button>,
  },
}

export const Destructive: Story = {
  args: {
    intent: "destructive",
    title: "Delete Patient Record",
    description:
      "This action cannot be undone. All patient data, medical history, and associated records will be permanently removed.",
    confirmLabel: "Delete Record",
    trigger: <Button variant="destructive">Delete Patient</Button>,
  },
}

export const Warning: Story = {
  args: {
    intent: "warning",
    title: "Discharge Patient",
    description:
      "Are you sure you want to discharge this patient? Please ensure all discharge notes and prescriptions have been completed.",
    confirmLabel: "Discharge",
    trigger: <Button variant="outline">Discharge Patient</Button>,
  },
}

export const Info: Story = {
  args: {
    intent: "info",
    title: "Appointment Scheduled",
    description:
      "The patient will receive a notification about the upcoming appointment. Would you like to confirm?",
    confirmLabel: "Send Notification",
    trigger: <Button variant="secondary">Schedule Appointment</Button>,
  },
}
