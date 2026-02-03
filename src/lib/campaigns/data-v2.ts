// Re-export everything from original data
export * from "./data"

import type {
  QuotaData,
  MetaAccountHealth,
  SequenceTimeline,
  DistributionValidation,
  DistributionConfig,
  TimelineWave,
} from "./types-v2"
import type { CampaignMessage } from "./types"

// Available work hours (07:00-20:00 in full-hour increments)
export const workHours = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
  "19:00", "20:00",
]

// Ordinal weekday options for monthly distribution
export const ordinalOptions: { value: number; label: string }[] = [
  { value: 1, label: "1ª" },
  { value: 2, label: "2ª" },
  { value: 3, label: "3ª" },
  { value: 4, label: "4ª" },
]

export const weekdayOptions: { value: number; label: string }[] = [
  { value: 1, label: "segunda-feira" },
  { value: 2, label: "terça-feira" },
  { value: 3, label: "quarta-feira" },
  { value: 4, label: "quinta-feira" },
  { value: 5, label: "sexta-feira" },
]

// Month names in Portuguese
const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
]

// Get month name from date
function getMonthName(date: Date): string {
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
}

// Mock quota data
export function mockQuotaData(audienceSize: number, messages: CampaignMessage[]): QuotaData {
  const monthlyQuota = 10000
  const alreadySent = 3240
  const scheduled = 1500
  const available = monthlyQuota - alreadySent - scheduled

  // Calculate total messages (worst case: all patients receive all messages)
  const totalMessages = audienceSize * messages.length

  // Distribute messages across months (simplified)
  const today = new Date()
  const campaignEstimateByMonth: { month: string; messages: number }[] = []

  // For simplicity, spread messages across 3 months
  const messagesPerMonth = Math.ceil(totalMessages / 3)
  for (let i = 0; i < 3; i++) {
    const monthDate = new Date(today.getFullYear(), today.getMonth() + i, 1)
    campaignEstimateByMonth.push({
      month: getMonthName(monthDate),
      messages: i === 2 ? totalMessages - (messagesPerMonth * 2) : messagesPerMonth,
    })
  }

  return {
    monthlyQuota,
    alreadySent,
    scheduled,
    available,
    currentMonth: getMonthName(today),
    campaignEstimateByMonth,
    totalCampaignEstimate: totalMessages,
  }
}

// Mock Meta account health
export function mockMetaHealth(): MetaAccountHealth {
  return {
    dailySendingLimit: 1000,
    qualityRating: "green",
    sentToday: 342,
  }
}

// Calculate workdays between two dates
function countWorkdays(startDate: Date, endDate: Date): number {
  let count = 0
  const current = new Date(startDate)
  while (current <= endDate) {
    const day = current.getDay()
    if (day !== 0 && day !== 6) count++ // Mon-Fri
    current.setDate(current.getDate() + 1)
  }
  return count
}

// Add workdays to a date
function addWorkdays(date: Date, days: number): Date {
  const result = new Date(date)
  let added = 0
  while (added < days) {
    result.setDate(result.getDate() + 1)
    const day = result.getDay()
    if (day !== 0 && day !== 6) added++
  }
  return result
}

// Format date to PT-BR
function formatDate(date: Date): string {
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })
}

// Get the Nth weekday of a given month (e.g. 2nd Wednesday of March 2026)
// ordinal: 1-4 (1st, 2nd, 3rd, 4th)
// weekday: 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri
export function getNthWeekdayOfMonth(yearMonth: string, ordinal: number, weekday: number): Date {
  const [year, month] = yearMonth.split("-").map(Number)
  // JS Date: month is 0-indexed, getDay() returns 0=Sun, 1=Mon...6=Sat
  const jsWeekday = weekday % 7 // Convert: 1=Mon->1, 2=Tue->2...5=Fri->5

  const firstOfMonth = new Date(year, month - 1, 1)
  const firstDayOfWeek = firstOfMonth.getDay() // 0=Sun...6=Sat

  // Find the first occurrence of the target weekday
  let dayOfMonth = 1 + ((jsWeekday - firstDayOfWeek + 7) % 7)

  // Add weeks to get the Nth occurrence
  dayOfMonth += (ordinal - 1) * 7

  return new Date(year, month - 1, dayOfMonth)
}

// Format ordinal weekday to human-readable label
export function formatOrdinalWeekday(ordinal: number, weekday: number): string {
  const ordinalLabels = ["1ª", "2ª", "3ª", "4ª"]
  const weekdayLabels = ["", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]
  return `${ordinalLabels[ordinal - 1]} ${weekdayLabels[weekday]}`
}

// Calculate sequence timeline based on distribution config
export function calculateTimeline(
  config: DistributionConfig,
  messages: CampaignMessage[],
  audienceSize: number
): SequenceTimeline {
  const waves: TimelineWave[] = []
  const colors: ("primary" | "secondary" | "tertiary")[] = ["primary", "secondary", "tertiary"]

  // Get message days (D0, D5, D12, etc.)
  const messageDays = messages.map((m) => m.day)

  // Calculate start date based on config type
  let startDate: Date
  let distributionDays = 1 // How many days to distribute initial sends

  switch (config.type) {
    case "single_batch":
      startDate = new Date(config.startDate)
      distributionDays = 1
      break
    case "workday_daily":
      startDate = new Date(config.startDate)
      distributionDays = Math.ceil(audienceSize / 500) // ~500/day
      break
    case "weekly":
      startDate = new Date(config.startDate)
      distributionDays = Math.ceil(audienceSize / 750) * 7 // Spread over weeks
      break
    case "monthly":
      startDate = getNthWeekdayOfMonth(config.startMonth, config.ordinal, config.weekday)
      distributionDays = Math.ceil(audienceSize / 5000) * 30 // Spread over months
      break
  }

  // Generate waves for each message
  messageDays.forEach((day, index) => {
    const waveStart = new Date(startDate)
    waveStart.setDate(waveStart.getDate() + day)

    const waveEnd = new Date(waveStart)
    waveEnd.setDate(waveEnd.getDate() + distributionDays - 1)

    waves.push({
      id: `wave-${index}`,
      label: `D${day}`,
      description: index === 0 ? "Inicial" : `Follow-up ${index}`,
      startDate: waveStart.toISOString(),
      endDate: waveEnd.toISOString(),
      messageCount: audienceSize,
      color: colors[index % 3],
    })
  })

  // Calculate totals
  const firstWaveStart = new Date(waves[0].startDate)
  const lastWaveEnd = new Date(waves[waves.length - 1].endDate)
  const totalDuration = Math.ceil((lastWaveEnd.getTime() - firstWaveStart.getTime()) / (1000 * 60 * 60 * 24))

  // Quota impact by month (simplified)
  const quotaImpactByMonth: { month: string; messages: number; quota: number; exceeds: boolean }[] = []
  const monthlyQuota = 10000
  const today = new Date()

  for (let i = 0; i < 3; i++) {
    const monthDate = new Date(today.getFullYear(), today.getMonth() + i, 1)
    const monthMessages = Math.ceil((audienceSize * messages.length) / 3)
    const available = i === 0 ? 5260 : monthlyQuota

    quotaImpactByMonth.push({
      month: getMonthName(monthDate),
      messages: monthMessages,
      quota: available,
      exceeds: monthMessages > available,
    })
  }

  return {
    waves,
    totalDuration,
    initialSendsRange: `${formatDate(new Date(waves[0].startDate))} - ${formatDate(new Date(waves[0].endDate))}`,
    lastFollowupDate: formatDate(new Date(waves[waves.length - 1].endDate)),
    totalMessages: audienceSize * messages.length,
    quotaImpactByMonth,
  }
}

// Validate distribution against quota and Meta limits
export function validateDistribution(
  config: DistributionConfig,
  audienceSize: number,
  quota: QuotaData,
  meta: MetaAccountHealth
): DistributionValidation {
  // Calculate daily volume based on config
  let dailyVolume: number

  switch (config.type) {
    case "single_batch":
      dailyVolume = audienceSize
      break
    case "workday_daily":
      dailyVolume = Math.ceil(audienceSize / 9) // ~9 workdays in 2 weeks
      break
    case "weekly":
      if (config.selectedDays.length === 0) {
        dailyVolume = 0
      } else {
        dailyVolume = Math.ceil(audienceSize / config.selectedDays.length)
      }
      break
    case "monthly":
      dailyVolume = Math.min(audienceSize, quota.monthlyQuota)
      break
  }

  // Check Meta tier limit
  const metaTierError = dailyVolume > meta.dailySendingLimit

  // Check quota warning (first month estimate exceeds available)
  const firstMonthEstimate = quota.campaignEstimateByMonth[0]?.messages ?? 0
  const quotaWarning = firstMonthEstimate > quota.available

  return {
    quotaWarning,
    metaTierError,
    currentDailyVolume: dailyVolume,
    metaDailyLimit: meta.dailySendingLimit,
    exceedsMonth: quotaWarning ? quota.currentMonth : undefined,
    availableQuota: quota.available,
  }
}

// Get next available months for monthly config
export function getAvailableMonths(count: number = 6): { value: string; label: string }[] {
  const months: { value: string; label: string }[] = []
  const today = new Date()

  for (let i = 0; i < count; i++) {
    const monthDate = new Date(today.getFullYear(), today.getMonth() + i, 1)
    months.push({
      value: `${monthDate.getFullYear()}-${String(monthDate.getMonth() + 1).padStart(2, "0")}`,
      label: getMonthName(monthDate),
    })
  }

  return months
}

// Get minimum date (today)
export function getMinDate(): string {
  return new Date().toISOString().split("T")[0]
}
