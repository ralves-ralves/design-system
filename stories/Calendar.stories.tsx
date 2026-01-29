import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "../src/components/ui/calendar"
import type { DateRange } from "react-day-picker"

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    )
  },
}

export const Range: Story = {
  render: () => {
    const today = new Date()
    const nextWeek = new Date(today)
    nextWeek.setDate(today.getDate() + 7)

    const [range, setRange] = React.useState<DateRange | undefined>({
      from: today,
      to: nextWeek,
    })

    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
      />
    )
  },
}
