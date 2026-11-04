import type { Config } from "tailwindcss";

// Soft-UI shadows. --lx / --ly scale the light direction (1 = lit from the top-left)
// and are nudged by <CursorLight /> so every surface reacts to the pointer.
const neuShadow = (distance: number, blur: number, inset = false) => {
  const prefix = inset ? "inset " : "";
  return [
    `${prefix}calc(var(--lx) * ${distance}px) calc(var(--ly) * ${distance}px) ${blur}px rgb(var(--neu-dark) / 0.55)`,
    `${prefix}calc(var(--lx) * -${distance}px) calc(var(--ly) * -${distance}px) ${blur}px rgb(var(--neu-light) / 0.95)`,
  ].join(", ");
};

// The same two shadows at zero size, so keyframes can grow a surface up from completely flat
const NEU_FLAT = "0 0 0 rgb(var(--neu-dark) / 0), 0 0 0 rgb(var(--neu-light) / 0)";

const neuTransition ="box-shadow 350ms ease-out, transform 200ms ease-out";

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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#7F71B9",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#201A72",
          foreground: "#FFFFFF",
        },
        // Body copy that passes WCAG AA on the lavender surface
        ink: {
          soft: "#574C8F",
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
      keyframes: {
        // Surfaces extrude out of the page: shadows grow from flat to full depth
        "neu-rise": {
          from: {
            opacity: "0",
            transform: "translateY(14px)",
            boxShadow: NEU_FLAT,
          },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
        },
        // Rotating hero word: the old word slides up and out as the new one slides up into place
        "word-in": {
          from: { opacity: "0", transform: "translateY(0.6em)" },
        },
        "word-out": {
          to: { opacity: "0", transform: "translateY(-0.6em)" },
        },
      },
      animation: {
        // `backwards` only fills the delay, so hover/press shadows still apply afterwards
        "neu-rise": "neu-rise 700ms cubic-bezier(0.2, 0.7, 0.2, 1) backwards",
        "fade-up": "fade-up 600ms cubic-bezier(0.2, 0.7, 0.2, 1) backwards",
        "word-in": "word-in 500ms cubic-bezier(0.2, 0.7, 0.2, 1) backwards",
        "word-out": "word-out 400ms ease-in forwards",
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
          boxShadow: neuShadow(9, 18),
          transition: neuTransition,
        },

        // Inset (Sunken) Neumorphic Container
        ".container-neumorphic-inset": {
          padding: theme("spacing.8"),
          backgroundColor: theme("colors.background"),
          borderRadius: theme("borderRadius.xl"),
          boxShadow: neuShadow(6, 12, true),
          transition: neuTransition,
        },

        // Hovered raised surfaces lift further off the page
        ".container-neumorphic-outset:hover": {
          boxShadow: neuShadow(12, 24),
        },

        // Deep sunken well, for framing photos and screenshots
        ".neu-well": {
          backgroundColor: theme("colors.background"),
          boxShadow: neuShadow(10, 20, true),
        },

        // Small raised button / chip surface with a light rim for affordance
        ".neu-button": {
          backgroundColor: theme("colors.background"),
          border: "1px solid rgb(255 255 255 / 0.65)",
          boxShadow: neuShadow(5, 10),
          transition: neuTransition,
        },
        ".neu-button:hover": {
          boxShadow: neuShadow(7, 14),
        },

        ".neu-chip": {
          backgroundColor: theme("colors.background"),
          boxShadow: neuShadow(3, 6),
          transition: neuTransition,
        },

        // Held-down state, e.g. the current page in the nav
        ".neu-pressed": {
          backgroundColor: theme("colors.background"),
          boxShadow: neuShadow(3, 6, true),
        },

        // Press-in: any raised surface sinks into the page while held
        ".neu-pressable:active": {
          boxShadow: neuShadow(4, 8, true),
          transform: "translateY(1px) scale(0.99)",
        },
      });
    },
  ],
};

export default config;
