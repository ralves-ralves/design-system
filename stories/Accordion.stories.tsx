import type { Meta, StoryObj } from "@storybook/react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../src/components/ui/accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="patient-info">
        <AccordionTrigger>Patient Information</AccordionTrigger>
        <AccordionContent>
          Maria Silva, 34 years old. Primary care physician: Dr. Ana Costa.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="medical-history">
        <AccordionTrigger>Medical History</AccordionTrigger>
        <AccordionContent>
          No known allergies. Last visit on January 15, 2026.
          Regular check-ups every 6 months.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="treatment-plan">
        <AccordionTrigger>Treatment Plan</AccordionTrigger>
        <AccordionContent>
          Follow-up appointment scheduled with Dr. Ana Costa.
          Continue current medication and monitor progress.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[400px]">
      <AccordionItem value="patient-info">
        <AccordionTrigger>Patient Information</AccordionTrigger>
        <AccordionContent>
          Maria Silva, 34 years old. Primary care physician: Dr. Ana Costa.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="medical-history">
        <AccordionTrigger>Medical History</AccordionTrigger>
        <AccordionContent>
          No known allergies. Last visit on January 15, 2026.
          Regular check-ups every 6 months.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="treatment-plan">
        <AccordionTrigger>Treatment Plan</AccordionTrigger>
        <AccordionContent>
          Follow-up appointment scheduled with Dr. Ana Costa.
          Continue current medication and monitor progress.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
