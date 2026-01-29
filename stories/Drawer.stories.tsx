import type { Meta, StoryObj } from "@storybook/react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "../src/components/ui/drawer"
import { Button } from "../src/components/ui/button"

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Patient Quick Actions</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Quick Actions</DrawerTitle>
          <DrawerDescription>
            Select an action for this patient.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 space-y-2">
          <Button variant="outline" className="w-full justify-start">
            Schedule Appointment
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Send Message
          </Button>
          <Button variant="outline" className="w-full justify-start">
            View Care Plan
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Request Lab Results
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Add Clinical Note
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
