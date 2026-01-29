import type { Meta, StoryObj } from "@storybook/react"
import {
  ConversationItem,
  ConversationItemAvatar,
  ConversationItemContent,
  ConversationItemHeader,
  ConversationItemName,
  ConversationItemMeta,
  ConversationItemPreview,
  ConversationItemTags,
  ConversationList,
  UnreadBadge,
} from "../src/components/ui/conversation-item"
import { Tag } from "../src/components/ui/tag"

const meta: Meta<typeof ConversationItem> = {
  title: "Components/ConversationItem",
  component: ConversationItem,
  argTypes: {
    active: { control: "boolean" },
    unread: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof ConversationItem>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <ConversationItem>
        <ConversationItemAvatar variant="patient">
          MS
        </ConversationItemAvatar>
        <ConversationItemContent>
          <ConversationItemHeader>
            <ConversationItemName>Maria Santos</ConversationItemName>
            <ConversationItemMeta>
              <span className="text-xs text-muted-foreground">10:32 AM</span>
            </ConversationItemMeta>
          </ConversationItemHeader>
          <ConversationItemPreview>
            Thank you for the prescription, doctor.
          </ConversationItemPreview>
        </ConversationItemContent>
      </ConversationItem>
    </div>
  ),
}

export const Active: Story = {
  render: () => (
    <div className="w-80">
      <ConversationItem active>
        <ConversationItemAvatar variant="patient" online>
          JO
        </ConversationItemAvatar>
        <ConversationItemContent>
          <ConversationItemHeader>
            <ConversationItemName>Joao Oliveira</ConversationItemName>
            <ConversationItemMeta>
              <span className="text-xs text-muted-foreground">9:15 AM</span>
            </ConversationItemMeta>
          </ConversationItemHeader>
          <ConversationItemPreview>
            I have a question about my dosage.
          </ConversationItemPreview>
          <ConversationItemTags>
            <Tag size="sm">Cardiology</Tag>
          </ConversationItemTags>
        </ConversationItemContent>
      </ConversationItem>
    </div>
  ),
}

export const Unread: Story = {
  render: () => (
    <div className="w-80">
      <ConversationItem unread>
        <ConversationItemAvatar variant="patient">
          AC
        </ConversationItemAvatar>
        <ConversationItemContent>
          <ConversationItemHeader>
            <ConversationItemName>Ana Costa</ConversationItemName>
            <ConversationItemMeta>
              <span className="text-xs text-muted-foreground">8:45 AM</span>
              <UnreadBadge count={3} />
            </ConversationItemMeta>
          </ConversationItemHeader>
          <ConversationItemPreview unread>
            I need to reschedule my appointment for next week.
          </ConversationItemPreview>
        </ConversationItemContent>
      </ConversationItem>
    </div>
  ),
}

export const List: Story = {
  render: () => (
    <div className="w-80 border border-border rounded-lg overflow-hidden">
      <ConversationList>
        <ConversationItem active>
          <ConversationItemAvatar variant="patient" online>
            JO
          </ConversationItemAvatar>
          <ConversationItemContent>
            <ConversationItemHeader>
              <ConversationItemName>Joao Oliveira</ConversationItemName>
              <ConversationItemMeta>
                <span className="text-xs text-muted-foreground">9:15 AM</span>
              </ConversationItemMeta>
            </ConversationItemHeader>
            <ConversationItemPreview>
              I have a question about my dosage.
            </ConversationItemPreview>
            <ConversationItemTags>
              <Tag size="sm">Cardiology</Tag>
            </ConversationItemTags>
          </ConversationItemContent>
        </ConversationItem>

        <ConversationItem unread>
          <ConversationItemAvatar variant="patient">
            AC
          </ConversationItemAvatar>
          <ConversationItemContent>
            <ConversationItemHeader>
              <ConversationItemName>Ana Costa</ConversationItemName>
              <ConversationItemMeta>
                <span className="text-xs text-muted-foreground">8:45 AM</span>
                <UnreadBadge count={3} />
              </ConversationItemMeta>
            </ConversationItemHeader>
            <ConversationItemPreview unread>
              I need to reschedule my appointment.
            </ConversationItemPreview>
          </ConversationItemContent>
        </ConversationItem>

        <ConversationItem>
          <ConversationItemAvatar variant="professional">
            DS
          </ConversationItemAvatar>
          <ConversationItemContent>
            <ConversationItemHeader>
              <ConversationItemName>Dr. Silva</ConversationItemName>
              <ConversationItemMeta>
                <span className="text-xs text-muted-foreground">Yesterday</span>
              </ConversationItemMeta>
            </ConversationItemHeader>
            <ConversationItemPreview>
              Lab results are ready for review.
            </ConversationItemPreview>
          </ConversationItemContent>
        </ConversationItem>

        <ConversationItem>
          <ConversationItemAvatar variant="patient">
            MS
          </ConversationItemAvatar>
          <ConversationItemContent>
            <ConversationItemHeader>
              <ConversationItemName>Maria Santos</ConversationItemName>
              <ConversationItemMeta>
                <span className="text-xs text-muted-foreground">Mon</span>
              </ConversationItemMeta>
            </ConversationItemHeader>
            <ConversationItemPreview>
              Thank you for the prescription, doctor.
            </ConversationItemPreview>
            <ConversationItemTags>
              <Tag size="sm">Neurology</Tag>
            </ConversationItemTags>
          </ConversationItemContent>
        </ConversationItem>
      </ConversationList>
    </div>
  ),
}
