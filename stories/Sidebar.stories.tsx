import type { Meta, StoryObj } from "@storybook/react"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "../src/components/ui/sidebar"
import { Home, Users, Calendar, BarChart3, Settings } from "lucide-react"

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    side: {
      control: "select",
      options: ["left", "right"],
    },
    variant: {
      control: "select",
      options: ["sidebar", "floating", "inset"],
    },
    collapsible: {
      control: "select",
      options: ["offcanvas", "icon", "none"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "400px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

const navItems = [
  { icon: Home, label: "Dashboard", isActive: true },
  { icon: Users, label: "Patients" },
  { icon: Calendar, label: "Schedule" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
]

export const Default: Story = {
  render: (args) => (
    <SidebarProvider>
      <Sidebar {...args}>
        <SidebarHeader className="border-b border-border/60 p-4">
          <span className="text-lg font-semibold">Nilo Health</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      tooltip={item.label}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t border-border/60 p-4">
          <span className="text-xs text-muted-foreground">
            Nilo Design System
          </span>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center gap-2 border-b border-border/60 p-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Main Content Area</span>
        </header>
        <div className="p-6">
          <p className="text-muted-foreground">
            This is the main content area next to the sidebar. Use the toggle
            button to collapse or expand the sidebar.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}
