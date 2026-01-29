import type { Meta, StoryObj } from "@storybook/react"
import { FilterModal, FilterSection } from "../src/components/ui/modal"
import { Button } from "../src/components/ui/button"
import { Checkbox } from "../src/components/ui/checkbox"
import { Label } from "../src/components/ui/label"

const meta: Meta<typeof FilterModal> = {
  title: "Components/FilterModal",
  component: FilterModal,
  argTypes: {
    activeFilterCount: { control: "number" },
  },
}

export default meta
type Story = StoryObj<typeof FilterModal>

export const Default: Story = {
  args: {
    title: "Filter Patients",
    description: "Narrow down the patient list using the criteria below.",
    trigger: <Button variant="outline">Filter Patients</Button>,
    children: (
      <>
        <FilterSection title="Status">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox id="status-active" />
              <Label htmlFor="status-active">Active</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="status-discharged" />
              <Label htmlFor="status-discharged">Discharged</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="status-waitlist" />
              <Label htmlFor="status-waitlist">Waitlist</Label>
            </div>
          </div>
        </FilterSection>
        <FilterSection title="Care Line">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox id="care-mental-health" />
              <Label htmlFor="care-mental-health">Mental Health</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="care-physiotherapy" />
              <Label htmlFor="care-physiotherapy">Physiotherapy</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="care-nutrition" />
              <Label htmlFor="care-nutrition">Nutrition</Label>
            </div>
          </div>
        </FilterSection>
      </>
    ),
  },
}
