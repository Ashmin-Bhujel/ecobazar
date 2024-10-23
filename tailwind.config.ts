import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "hsl(var(--white))",
      warning: "hsl(var(--warning))",
      error: "hsl(var(--error))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        bright: "hsl(var(--primary-bright))",
        dark: "hsl(var(--primary-dark))",
      },
      gray: {
        50: "hsl(var(--gray-50))",
        100: "hsl(var(--gray-100))",
        200: "hsl(var(--gray-200))",
        300: "hsl(var(--gray-300))",
        400: "hsl(var(--gray-400))",
        500: "hsl(var(--gray-500))",
        600: "hsl(var(--gray-600))",
        700: "hsl(var(--gray-700))",
        800: "hsl(var(--gray-800))",
        900: "hsl(var(--gray-900))",
      },
      "green-gray": {
        50: "hsl(var(--green-gray-50))",
        100: "hsl(var(--green-gray-100))",
        200: "hsl(var(--green-gray-200))",
        300: "hsl(var(--green-gray-300))",
        400: "hsl(var(--green-gray-400))",
        500: "hsl(var(--green-gray-500))",
        600: "hsl(var(--green-gray-600))",
        700: "hsl(var(--green-gray-700))",
        800: "hsl(var(--green-gray-800))",
        900: "hsl(var(--green-gray-900))",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      display: ["4.5rem", "1.2"],
      h1: ["3.5rem", "1.2"],
      h2: ["3rem", "1.2"],
      h3: ["2.5rem", "1.2"],
      h4: ["2.25rem", "1.2"],
      h5: ["2rem", "1.2"],
      "2xl": ["1.5rem", "1.5"],
      xl: ["1.25rem", "1.5"],
      lg: ["1.125rem", "1.5"],
      md: ["1rem", "1.5"],
      sm: ["0.875rem", "1.5"],
      tiny: ["0.75rem", "1.3"],
      "caps-2xl": ["1.5rem", "1.2"],
      "caps-xl": ["1rem", "1.2"],
      "caps-l": [
        "1rem",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
      "caps-md": [
        "0.875rem",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
      "caps-sm": [
        "0.75rem",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
      "caps-tiny": [
        "0.625rem",
        {
          lineHeight: "1",
          fontWeight: 500,
        },
      ],
    },
    fontWeight: {
      400: "400",
      500: "500",
      600: "600",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
