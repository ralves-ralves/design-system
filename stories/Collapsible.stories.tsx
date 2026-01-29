import type { Meta, StoryObj } from "@storybook/react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../src/components/ui/collapsible"
import { Button } from "../src/components/ui/button"
import { ChevronsUpDown } from "lucide-react"

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Patient: Maria Silva
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 text-sm">
        Primary physician: Dr. Ana Costa
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          Date of birth: March 12, 1991
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Blood type: O+
        </div>
        <div className="rounded-md border px-4 py-3 text-sm">
          Last visit: January 15, 2026
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
