import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray30: "var(--gray-30)",
        accentLime: "var(--accent-lime)",
        accentLimePrimary: "var(--accent-lime-primary)",
        purple100: "var(--purple-100)",
        purple900: "var(--purple-900)",
        accentBlue: "var(--accent-blue)",
        neutralPrimary: "var(--neutral-primary)",
        neutralSecondary: "var(--neutral-secondary)",
        neutralTertiary: "var(--neutral-tertiary)",
        neutralDisabled: "var(--neutral-disabled)",
        destructiveSecondary: "var(--destructive-secondary)",
        warningPrimary: "var(--warning-primary)",
        borderNeutralPrimary: "var(--border-neutral-primary)",
        borderNeutralSecondary: "var(--border-neutral-secondary)",
        borderDestructiveSecondary: "var(--border-destructive-secondary)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
