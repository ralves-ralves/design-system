import type { Meta, StoryObj } from "@storybook/react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "../src/components/ui/sheet"
import { Button } from "../src/components/ui/button"

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Patient Details</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Patient Details</SheetTitle>
          <SheetDescription>
            View and manage patient information.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          <div>
            <p className="text-sm font-medium">Name</p>
            <p className="text-sm text-muted-foreground">Maria Silva</p>
          </div>
          <div>
            <p className="text-sm font-medium">Date of Birth</p>
            <p className="text-sm text-muted-foreground">1985-03-15</p>
          </div>
          <div>
            <p className="text-sm font-medium">Care Line</p>
            <p className="text-sm text-muted-foreground">Diabetes Management</p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
          <Button>Edit Patient</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Navigation</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Navigate through the care platform.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          <Button variant="ghost" className="w-full justify-start">Patients</Button>
          <Button variant="ghost" className="w-full justify-start">Appointments</Button>
          <Button variant="ghost" className="w-full justify-start">Care Plans</Button>
          <Button variant="ghost" className="w-full justify-start">Reports</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Show Summary</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Appointment Summary</SheetTitle>
          <SheetDescription>
            Overview of today's scheduled appointments.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 flex gap-8">
          <div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Total Appointments</p>
          </div>
          <div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </div>
          <div>
            <p className="text-2xl font-bold">9</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
}
