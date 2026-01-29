/**
 * Tailwind CSS v4 preset for the Nilo Design System.
 *
 * For Tailwind v4, consumers should import the design system's styles.css
 * directly in their CSS file:
 *
 * ```css
 * @import "tailwindcss";
 * @import "@nilohealth/design-system/styles.css";
 * ```
 *
 * This module exports the design token values for programmatic access
 * (e.g., in JS/TS code that needs token values outside of CSS context).
 */

export const colors = {
  primary: {
    DEFAULT: "var(--primary)",
    foreground: "var(--primary-foreground)",
    50: "var(--primary-50)",
    100: "var(--primary-100)",
    200: "var(--primary-200)",
    300: "var(--primary-300)",
    400: "var(--primary-400)",
    500: "var(--primary-500)",
    600: "var(--primary-600)",
    700: "var(--primary-700)",
    800: "var(--primary-800)",
    900: "var(--primary-900)",
    950: "var(--primary-950)",
  },
  secondary: {
    DEFAULT: "var(--secondary)",
    foreground: "var(--secondary-foreground)",
  },
  destructive: {
    DEFAULT: "var(--destructive)",
    foreground: "var(--destructive-foreground)",
  },
  success: {
    DEFAULT: "var(--success)",
    foreground: "var(--success-foreground)",
  },
  warning: {
    DEFAULT: "var(--warning)",
    foreground: "var(--warning-foreground)",
  },
  info: {
    DEFAULT: "var(--info)",
    foreground: "var(--info-foreground)",
  },
  muted: {
    DEFAULT: "var(--muted)",
    foreground: "var(--muted-foreground)",
  },
  accent: {
    DEFAULT: "var(--accent)",
    foreground: "var(--accent-foreground)",
  },
  background: "var(--background)",
  foreground: "var(--foreground)",
  card: {
    DEFAULT: "var(--card)",
    foreground: "var(--card-foreground)",
  },
  popover: {
    DEFAULT: "var(--popover)",
    foreground: "var(--popover-foreground)",
  },
  border: "var(--border)",
  input: "var(--input)",
  ring: "var(--ring)",
  neutral: {
    50: "var(--neutral-50)",
    100: "var(--neutral-100)",
    200: "var(--neutral-200)",
    300: "var(--neutral-300)",
    400: "var(--neutral-400)",
    500: "var(--neutral-500)",
    600: "var(--neutral-600)",
    700: "var(--neutral-700)",
    800: "var(--neutral-800)",
    900: "var(--neutral-900)",
    950: "var(--neutral-950)",
  },
  grey: {
    50: "var(--grey-50)",
    100: "var(--grey-100)",
    200: "var(--grey-200)",
    300: "var(--grey-300)",
    400: "var(--grey-400)",
    500: "var(--grey-500)",
    600: "var(--grey-600)",
    700: "var(--grey-700)",
    800: "var(--grey-800)",
    900: "var(--grey-900)",
    950: "var(--grey-950)",
  },
  yellow: {
    DEFAULT: "var(--yellow)",
    foreground: "var(--yellow-foreground)",
    50: "var(--yellow-50)",
    100: "var(--yellow-100)",
    200: "var(--yellow-200)",
    300: "var(--yellow-300)",
    400: "var(--yellow-400)",
    500: "var(--yellow-500)",
    600: "var(--yellow-600)",
    700: "var(--yellow-700)",
    800: "var(--yellow-800)",
    900: "var(--yellow-900)",
    950: "var(--yellow-950)",
  },
  chart: {
    1: "var(--chart-1)",
    2: "var(--chart-2)",
    3: "var(--chart-3)",
    4: "var(--chart-4)",
    5: "var(--chart-5)",
  },
  sidebar: {
    DEFAULT: "var(--sidebar)",
    foreground: "var(--sidebar-foreground)",
    primary: "var(--sidebar-primary)",
    "primary-foreground": "var(--sidebar-primary-foreground)",
    accent: "var(--sidebar-accent)",
    "accent-foreground": "var(--sidebar-accent-foreground)",
    border: "var(--sidebar-border)",
    ring: "var(--sidebar-ring)",
  },
} as const

export const radius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  "3xl": "var(--radius-3xl)",
} as const

export const shadows = {
  xs: "var(--shadow-xs)",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  xl: "var(--shadow-xl)",
  "primary-sm": "var(--shadow-primary-sm)",
} as const

export const animation = {
  durations: {
    fast: "var(--duration-fast)",
    normal: "var(--duration-normal)",
    slow: "var(--duration-slow)",
  },
  easings: {
    outExpo: "var(--ease-out-expo)",
    outQuart: "var(--ease-out-quart)",
    spring: "var(--ease-spring)",
  },
} as const
