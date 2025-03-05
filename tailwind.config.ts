import type { Config } from "tailwindcss";
import { Nunito, Nunito_Sans } from "next/font/google";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7F71B9",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#201A72",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }: { 
      addComponents: any; 
      theme: (path: string) => any 
    }) {
      addComponents({
        // Raised Neumorphic Container
        ".container-neumorphic-outset": {
          padding: theme("spacing.8"),
          backgroundColor: theme("colors.background"),
          borderRadius: theme("borderRadius.xl"),
          boxShadow:
            "0px 6px 12px 0px rgba(189, 182, 214, 0.5), 0px 2px 3px 0px rgba(255, 255, 255, 0.8), 0px -1px 2px 0px rgba(189, 182, 214, 0.2)",
          transition: "all 0.3s ease-out"
        },

        // Inset (Sunken) Neumorphic Container
        ".container-neumorphic-inset": {
          padding: theme("spacing.8"),
          backgroundColor: theme("colors.background"),
          borderRadius: theme("borderRadius.xl"),
          boxShadow:
            "inset 0px 6px 12px 0px rgba(189, 182, 214, 0.5), inset 0px 2px 3px 0px rgba(255, 255, 255, 0.8), inset 0px -1px 2px 0px rgba(189, 182, 214, 0.2)",
          transition: "all 0.3s ease-out"
        },

        ".container-neumorphic-outset:hover": {
          boxShadow:
            "0px 4px 8px 0px rgba(189, 182, 214, 0.4), 0px 1px 2px 0px rgba(255, 255, 255, 0.7)",
          transition: "all 0.3s ease-out"
        },

        // ".shadow-pressed": {
        //   boxShadow:
        //     "inset 0px 2px 5px 0px rgb(189, 182, 214), inset 0px 1px 1px 0px rgb(255, 255, 255)"
        // },

        // ".container-neumorphic-outset:onClick": {
        //   boxShadow: "inset 0px 2px 5px 0px rgb(189, 182, 214), inset 0px 1px 1px 0px rgb(255, 255, 255)"
        // },
      });
    },
  ],
};

export default config;
