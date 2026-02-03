"use client"

import type { CampaignMessage } from "@/lib/campaigns/types"

interface MessageTimelineProps {
  messages: CampaignMessage[]
}

export function MessageTimeline({ messages }: MessageTimelineProps) {
  return (
    <div className="space-y-3">
      {messages.map((message, index) => (
        <div key={message.id} className="flex gap-3">
          {/* Timeline indicator */}
          <div className="flex flex-col items-center">
            <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
              index === 0 ? "bg-primary" : "bg-muted-foreground/40"
            }`} />
            {index < messages.length - 1 && (
              <div className="w-px flex-1 bg-border mt-1" />
            )}
          </div>

          {/* Content */}
          <div className="pb-4">
            <p className="text-xs font-medium text-muted-foreground">{message.label}</p>
            <p className="text-sm text-foreground mt-0.5">{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
