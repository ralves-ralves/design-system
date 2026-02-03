// Re-export all original types
export * from "./types"
import type { CampaignObjective, CampaignTemplate, AudienceValidation } from "./types"

// Distribution type options
export type DistributionType =
  | "single_batch"
  | "workday_daily"
  | "weekly"
  | "monthly"

// Weekday selection for weekly distribution
export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri"

// Distribution configuration for each type
export interface SingleBatchConfig {
  type: "single_batch"
  startDate: string // ISO date string
  startTime: string // HH:mm format
}

export interface WorkdayDailyConfig {
  type: "workday_daily"
  startDate: string
  startTime: string
  sendsPerDay: number // User-defined sends per day
  // Calculated fields
  totalWorkdays?: number
  completionDate?: string
}

export interface WeeklyConfig {
  type: "weekly"
  startDate: string
  startTime: string
  selectedDays: Weekday[] // At least one required
  sendsPerDay: number // User-defined sends per day
  // Calculated fields
  totalSendDays?: number
  completionDate?: string
}

export interface MonthlyConfig {
  type: "monthly"
  dayOfMonth: number // 1-31
  startTime: string
  startMonth: string // YYYY-MM format
  sendsPerDay: number // User-defined sends per day
  // Calculated fields
  sendDates?: string[]
  completionDate?: string
}

export type DistributionConfig =
  | SingleBatchConfig
  | WorkdayDailyConfig
  | WeeklyConfig
  | MonthlyConfig

// Quota data structure
export interface QuotaData {
  monthlyQuota: number
  alreadySent: number
  scheduled: number
  available: number
  currentMonth: string // "Janeiro 2026"
  campaignEstimateByMonth: {
    month: string
    messages: number
  }[]
  totalCampaignEstimate: number
}

// Meta account health data
export interface MetaAccountHealth {
  dailySendingLimit: number
  qualityRating: "green" | "yellow" | "red"
  sentToday: number
}

// Timeline wave for Gantt visualization
export interface TimelineWave {
  id: string
  label: string // "D0", "D5", "D12"
  description: string // "Inicial", "Follow-up 1"
  startDate: string
  endDate: string
  messageCount: number
  color: "primary" | "secondary" | "tertiary"
}

// Sequence timeline data
export interface SequenceTimeline {
  waves: TimelineWave[]
  totalDuration: number // days
  initialSendsRange: string
  lastFollowupDate: string
  totalMessages: number
  quotaImpactByMonth: {
    month: string
    messages: number
    quota: number
    exceeds: boolean
  }[]
}

// Validation state
export interface DistributionValidation {
  quotaWarning: boolean // Non-blocking
  metaTierError: boolean // Blocking
  currentDailyVolume?: number
  metaDailyLimit?: number
  exceedsMonth?: string
  availableQuota?: number
}

// Extended campaign state for v2
export interface CampaignStateV2 {
  step: 1 | 2 | 3 | 4 | 5
  objective: CampaignObjective | null
  objectiveName: string | null
  audienceFile: File | null
  audienceFileName: string | null
  audienceValidation: AudienceValidation | null
  selectedCampaign: CampaignTemplate | null
  // Distribution step (NEW)
  distributionType: DistributionType | null
  distributionConfig: DistributionConfig | null
  quotaWarningAcknowledged: boolean
  // Computed/derived
  sequenceTimeline: SequenceTimeline | null
  validation: DistributionValidation | null
  // Final
  isLaunched: boolean
}

// Extended actions for v2
export type CampaignActionV2 =
  | { type: "SET_STEP"; payload: 1 | 2 | 3 | 4 | 5 }
  | { type: "SELECT_OBJECTIVE"; payload: { objective: CampaignObjective; name: string } }
  | { type: "SET_AUDIENCE_FILE"; payload: { file: File; validation: AudienceValidation } }
  | { type: "CLEAR_AUDIENCE" }
  | { type: "SELECT_CAMPAIGN"; payload: CampaignTemplate }
  // Distribution actions (NEW)
  | { type: "SET_DISTRIBUTION_TYPE"; payload: DistributionType }
  | { type: "SET_DISTRIBUTION_CONFIG"; payload: DistributionConfig }
  | { type: "ACKNOWLEDGE_QUOTA_WARNING" }
  | { type: "UPDATE_TIMELINE"; payload: SequenceTimeline }
  | { type: "UPDATE_VALIDATION"; payload: DistributionValidation }
  // Final
  | { type: "LAUNCH_CAMPAIGN" }
  | { type: "RESET" }
