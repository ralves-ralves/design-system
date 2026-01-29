import type { Meta, StoryObj } from "@storybook/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../src/components/ui/form"
import { Input } from "../src/components/ui/input"
import { Button } from "../src/components/ui/button"

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
}

export default meta
type Story = StoryObj<typeof Form>

const patientSchema = z.object({
  name: z.string().min(1, "Patient name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
})

type PatientFormValues = z.infer<typeof patientSchema>

function PatientRegistrationForm() {
  const form = useForm<PatientFormValues>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  function onSubmit(data: PatientFormValues) {
    console.log("Patient registered:", data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-96">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Maria Silva" {...field} />
              </FormControl>
              <FormDescription>
                Enter the patient's full legal name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="maria.silva@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Used for appointment reminders and communication.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Register Patient</Button>
      </form>
    </Form>
  )
}

export const Default: Story = {
  render: () => <PatientRegistrationForm />,
}
