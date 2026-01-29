import type { Meta, StoryObj } from "@storybook/react"
import { Heart } from "lucide-react"
import { Tag, CareLineTag, CustomTag, FixedTag } from "../src/components/ui/tag"

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "careLine"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    removable: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    children: "Cardiology",
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag variant="solid">Solid</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="careLine">Care Line</Tag>
    </div>
  ),
}

export const CareLineTags: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <CareLineTag>Mental Health</CareLineTag>
      <CareLineTag>Primary Care</CareLineTag>
      <CareLineTag>Nutrition</CareLineTag>
      <CareLineTag size="sm">Small Care Line</CareLineTag>
      <CareLineTag size="lg">Large Care Line</CareLineTag>
    </div>
  ),
}

export const CustomTags: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <CustomTag bgColor="#EDE9FE" textColor="#6D28D9">
        Psychiatry
      </CustomTag>
      <CustomTag bgColor="#FEF3C7" textColor="#92400E">
        Urgent
      </CustomTag>
      <CustomTag
        bgColor="#FCE7F3"
        textColor="#9D174D"
        icon={<Heart className="h-3 w-3" />}
      >
        Wellness
      </CustomTag>
    </div>
  ),
}

export const FixedTags: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <FixedTag variant="solid">Solid Fixed</FixedTag>
      <FixedTag variant="outline">Outline Fixed</FixedTag>
      <FixedTag variant="solid" size="sm">Small</FixedTag>
      <FixedTag variant="outline" size="lg">Large</FixedTag>
    </div>
  ),
}

export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag removable onRemove={() => {}}>
        Removable Solid
      </Tag>
      <Tag variant="outline" removable onRemove={() => {}}>
        Removable Outline
      </Tag>
      <CareLineTag removable onRemove={() => {}}>
        Removable Care Line
      </CareLineTag>
      <CustomTag
        bgColor="#EDE9FE"
        textColor="#6D28D9"
        removable
        onRemove={() => {}}
      >
        Removable Custom
      </CustomTag>
    </div>
  ),
}
