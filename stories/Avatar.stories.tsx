import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarImage, AvatarFallback } from "../src/components/ui/avatar"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://api.dicebear.com/9.x/avataaars/svg?seed=healthcare" alt="Healthcare professional" />
      <AvatarFallback variant="professional">HP</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>MS</AvatarFallback>
    </Avatar>
  ),
}

export const Professional: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback variant="professional">AC</AvatarFallback>
    </Avatar>
  ),
}

export const Patient: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback variant="patient">MS</AvatarFallback>
    </Avatar>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarImage src="https://api.dicebear.com/9.x/avataaars/svg?seed=doctor" alt="Dr. Ana Costa" />
          <AvatarFallback variant="professional">AC</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">With Image</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarFallback variant="professional">AC</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">Professional</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar>
          <AvatarFallback variant="patient">MS</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">Patient</span>
      </div>
    </div>
  ),
}
