import type { Meta, StoryObj } from "@storybook/react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../src/components/ui/popover"
import { Button } from "../src/components/ui/button"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">View Notification</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <p className="text-sm font-medium">New Lab Results Available</p>
          <p className="text-sm text-muted-foreground">
            Lab results for patient Maria Silva are ready for review. Click
            below to open the full report.
          </p>
          <Button size="sm" className="w-full">View Results</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
