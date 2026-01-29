import type { Meta, StoryObj } from "@storybook/react"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../src/components/ui/hover-card"

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer text-sm font-medium underline underline-offset-4">
          Maria Silva
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Maria Silva</h4>
          <p className="text-sm text-muted-foreground">
            Patient ID: NLH-20483
          </p>
          <div className="flex gap-4 text-sm">
            <div>
              <p className="font-medium">Age</p>
              <p className="text-muted-foreground">41</p>
            </div>
            <div>
              <p className="font-medium">Care Line</p>
              <p className="text-muted-foreground">Diabetes</p>
            </div>
            <div>
              <p className="font-medium">Status</p>
              <p className="text-muted-foreground">Active</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Last visit: January 15, 2026
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
