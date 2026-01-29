import type { Meta, StoryObj } from "@storybook/react"
import { toast } from "sonner"
import { Toaster } from "../src/components/ui/sonner"
import { Button } from "../src/components/ui/button"

const meta: Meta<typeof Toaster> = {
  title: "Components/Sonner",
  component: Toaster,
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast("Appointment scheduled for tomorrow at 10:00 AM")}
        >
          Default Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Patient record saved successfully")
          }
        >
          Success Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error("Failed to connect to the health records service")
          }
        >
          Error Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Patient has a known allergy to penicillin")
          }
        >
          Warning Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("New lab results are available for review")
          }
        >
          Info Toast
        </Button>
      </div>
    </div>
  ),
}
