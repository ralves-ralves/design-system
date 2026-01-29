import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../src/components/ui/tabs"

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="appointments">Appointments</TabsTrigger>
        <TabsTrigger value="medications">Medications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 text-sm">
          <p className="font-medium">Patient: Maria Silva</p>
          <p className="text-muted-foreground">
            Overview of the patient's health record, managed by Dr. Ana Costa.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="appointments">
        <div className="p-4 text-sm">
          <p className="font-medium">Upcoming Appointments</p>
          <p className="text-muted-foreground">
            Maria Silva has 2 scheduled appointments with Dr. Ana Costa.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="medications">
        <div className="p-4 text-sm">
          <p className="font-medium">Current Medications</p>
          <p className="text-muted-foreground">
            Maria Silva is currently taking 3 prescribed medications.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
