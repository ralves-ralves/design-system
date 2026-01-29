import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "../src/components/ui/aspect-ratio"

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-muted">
          <span className="text-sm text-muted-foreground">16 : 9</span>
        </div>
      </AspectRatio>
    </div>
  ),
}
