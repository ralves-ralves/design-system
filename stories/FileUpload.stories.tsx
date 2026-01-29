import type { Meta, StoryObj } from "@storybook/react"
import { FileUpload, HEALTH_FILE_PRESETS } from "../src/components/ui/file-upload"

const meta: Meta<typeof FileUpload> = {
  title: "Components/FileUpload",
  component: FileUpload,
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: { control: "boolean" },
    multiple: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  args: {
    hint: "Arraste documentos do paciente ou clique para selecionar",
  },
}

export const SmallSize: Story = {
  args: {
    size: "sm",
    hint: "Upload de arquivo",
  },
}

export const MedicalImages: Story = {
  args: {
    accept: HEALTH_FILE_PRESETS.medicalImages.accept,
    hint: HEALTH_FILE_PRESETS.medicalImages.label,
    maxSize: 100 * 1024 * 1024,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    hint: "Upload desabilitado",
  },
}
