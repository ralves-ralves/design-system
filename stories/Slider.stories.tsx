import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "../src/components/ui/slider"

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
}

export const Range: Story = {
  args: {
    defaultValue: [20, 80],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
}

export const WithSteps: Story = {
  args: {
    defaultValue: [3],
    max: 10,
    step: 1,
    className: "w-[300px]",
  },
}
