/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        lg: "15px",
        xl: "0",
        "2xl": "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        lg: ["18px", "32px"],
        base: ["16px", "28px"],
        sm: ["14px", "28px"],
        test: ["11px", "16px"],
        caption: ["12px", "22px"],
        "caption-sm": ["11px", "16px"],
        h1: ["40px", "48px"],
        h2: ["32px", "40px"],
        h3: ["28px", "36px"],
        h4: ["24px", "32px"],
        h5: ["20px", "28px"],
        h6: ["18px", "28px"],
      },
      colors: {
        white: "#FFFFFF",
        gray: {
          20: "#8D99FF05",
          50: "#C4CDD5",
          100: "#FCFCFD",
          200: "#A3ACBA",
          300: "#9D9FA2",
          400: "rgba(46, 58, 72, 0.1)",
          500: "#707C87",
          600: "#596570",
          700: "#353536",
          800: "#F2F2F2",
        },
        primary: {
          400: "#1E90FF",
          500: "#4A54F5",
          600: "#7B68EE",
        },
        black: {
          400: "#2E3A48",
          500: "#0B0A0A",
        },
        success: {
          100: "rgba(112, 192, 57, 0.1)",
          200: "#70C039",
          300: "#2BAC76",
          400: "#17E2B2",
          500: "rgba(43, 172, 118, 0.06)",
        },
        warning: {
          100: "rgba(255, 107, 0, 0.1)",
          200: "#FF6B00",
          300: "#F04438",
        },
        info: {
          100: "rgba(74, 84, 245, 0.1)",
          200: "#4A54F5",
        },
        danger: {
          100: "rgba(224, 30, 90, 0.08)",
          200: "#E01E5A",
          300: "#C10A26",
        },
      },
    },
  },
  plugins: [],
};
