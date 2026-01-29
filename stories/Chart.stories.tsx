import type { Meta, StoryObj } from "@storybook/react"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../src/components/ui/chart"
import type { ChartConfig } from "../src/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"

const meta: Meta<typeof ChartContainer> = {
  title: "Components/Chart",
  component: ChartContainer,
}

export default meta
type Story = StoryObj<typeof ChartContainer>

const patientVisitsData = [
  { month: "Jan", visits: 186, newPatients: 80 },
  { month: "Feb", visits: 205, newPatients: 95 },
  { month: "Mar", visits: 237, newPatients: 110 },
  { month: "Apr", visits: 273, newPatients: 125 },
  { month: "May", visits: 209, newPatients: 88 },
  { month: "Jun", visits: 314, newPatients: 140 },
]

const chartConfig: ChartConfig = {
  visits: {
    label: "Total Visits",
    color: "#34AA6E",
  },
  newPatients: {
    label: "New Patients",
    color: "#2563EB",
  },
}

export const Default: Story = {
  render: () => (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={patientVisitsData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
        <Bar dataKey="newPatients" fill="var(--color-newPatients)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}
