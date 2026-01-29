import type { Meta, StoryObj } from "@storybook/react"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "../src/components/ui/command"

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search patients, actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Patients">
          <CommandItem>
            Maria Silva
            <CommandShortcut>ID-1024</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Carlos Oliveira
            <CommandShortcut>ID-1025</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Ana Costa
            <CommandShortcut>ID-1026</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            New Patient Record
            <CommandShortcut>Ctrl+N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Schedule Appointment
            <CommandShortcut>Ctrl+S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Generate Report
            <CommandShortcut>Ctrl+R</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
