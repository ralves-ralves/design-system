import type { Meta, StoryObj } from "@storybook/react"
import { Bell } from "lucide-react"
import { CountBadge } from "../src/components/ui/count-badge"

const meta: Meta<typeof CountBadge> = {
  title: "Components/CountBadge",
  component: CountBadge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
    count: {
      control: "number",
    },
    max: {
      control: "number",
    },
    showZero: {
      control: "boolean",
    },
    dot: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof CountBadge>

export const Default: Story = {
  args: {
    count: 5,
    children: <Bell className="h-6 w-6" />,
  },
}

export const HighCount: Story = {
  args: {
    count: 150,
    max: 99,
    children: <Bell className="h-6 w-6" />,
  },
}

export const DotVariant: Story = {
  args: {
    dot: true,
    children: <Bell className="h-6 w-6" />,
  },
}

export const Destructive: Story = {
  args: {
    count: 3,
    variant: "destructive",
    children: <Bell className="h-6 w-6" />,
  },
}
