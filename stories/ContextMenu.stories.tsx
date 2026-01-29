import type { Meta, StoryObj } from "@storybook/react"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "../src/components/ui/context-menu"

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
}

export default meta
type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right-click here for patient actions
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>Patient Record</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          View Profile
          <ContextMenuShortcut>Ctrl+P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Edit Details
          <ContextMenuShortcut>Ctrl+E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Schedule</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>New Appointment</ContextMenuItem>
            <ContextMenuItem>Follow-up Visit</ContextMenuItem>
            <ContextMenuItem>Lab Work</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Assign To</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuRadioGroup value="dr-santos">
              <ContextMenuRadioItem value="dr-santos">Dr. Santos</ContextMenuRadioItem>
              <ContextMenuRadioItem value="dr-oliveira">Dr. Oliveira</ContextMenuRadioItem>
              <ContextMenuRadioItem value="dr-costa">Dr. Costa</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Notifications Enabled</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Priority Patient</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive">
          Archive Record
          <ContextMenuShortcut>Ctrl+D</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
