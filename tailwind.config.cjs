// Defaults: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        main: "repeat(12, 78px)",
        1: "1fr",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: {
        bg: "#F8F8F8",
        "00": "#F5F5F5",
        "01": "#E0E0E0",
        "02": "#D5D5D5",
        "03": "#CCCCCC",
        dark: "#2E2E2E",
        text: { DEFAULT: "#555555", alt: "#999999", alt2: "#777777" },
      },
      "france-blue": "#000091",
      white: "#FFFFFF",
      "marianne-red": "#E1000F",
      dora: {
        // deprecated
        magenta: {
          brand: "#9C6FF4",
          hover: "#7B40F0",
          cta: "#5B12EB",
          dark: "#19004a",
        },
      },
      magenta: {
        brand: "#9C6FF4",
        hover: "#7B40F0",
        cta: "#5B12EB",
        dark: "#19004a",
        80: "#AF8EF3",
        60: "#C3AAF6",
        40: "#D7C6F9",
        20: "#EBE3FB",
        10: "#F5F0FD",
      },
      success: "#008941",
      error: "#E10600",
      information: { DEFAULT: "#0762C8", bg: "#DBF0FF", light: "#F0F8FF" },
      available: { DEFAULT: "#008941", dark: "#1cda76" },
      na: { DEFAULT: "#e10600", dark: "#ff504c" },
      wait: { DEFAULT: "#f29023", dark: "#fe9800" },
    },
    fontFamily: {
      sans: ["Marianne"],
    },
    fontSize: {
      f12: ".75rem", // 12px
      f14: ".875rem", // 14px
      f16: "1rem", // 16px
      f17: "1.0625rem", // 17px
      f18: "1.125rem", // 18px
      f19: "1.1875rem", // 19px
      f20: "1.25rem", // 20px
      f21: "1.3125rem", // 21px
      f22: "1.375rem", // 22px
      f23: "1.4375rem", // 23px
      f24: "1.5rem", // 24px
      f26: "1.625rem", // 26px
      f28: "1.75rem", // 28px
      f30: "1.875rem", // 30px
      f32: "2rem", // 32px
      f38: "2.375rem", // 38px
      f45: "2.8125rem", // 45px

      // deprecated
      xs: ".75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.0625rem", // 17px
      xl: "1.125rem", // 18px
      "2xl": "1.1875rem", // 19px
      "3xl": "1.25rem", // 20px
      "4xl": "1.3125rem", // 21px
      "5xl": "1.375rem", // 22px
      "6xl": "1.4375rem", // 23px
      "7xl": "1.5rem", // 24px
      "8xl": "1.625rem", // 26px
      "9xl": "1.75rem", // 28px
      "10xl": "1.875rem", // 30px
      "11xl": "2rem", // 32px
      "12xl": "2.375rem", // 38px
      "13xl": "2.8125rem", // 45px
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      12: ".75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
      // deprecated
      // tight: "1.2",
      // normal: "1.5",
      large: "1.7",
    },
    screens: {
      md: "576px",
      lg: "768px",
      xl: "1024px",
      print: { raw: "print" },
    },
    spacing: {
      s0: "0",
      s2: "0.125rem",
      s4: "0.25rem",
      s6: "0.375rem",
      s8: "0.5rem",
      s10: "0.625rem",
      s12: "0.75rem",
      s16: "1rem",
      s20: "1.25rem",
      s24: "1.5rem",
      s32: "2rem",
      s40: "2.5rem",
      s48: "3rem",
      s56: "3.5rem",
      s64: "4rem",
      s72: "4.5rem",
      s80: "5rem",
      s88: "5.5rem",
      s96: "6rem",
      s112: "7rem",
      s136: "8.5rem",
      s160: "10rem",
      s250: "15.625rem",
      // deprecated
      0: "0",
      "2p": "0.125rem", // 2px
      "1/2": "0.25rem", // 4px
      "3/4": "0.375rem", // 6px
      1: "0.5rem", // 8px
      "5/4": "0.625rem", // 10px
      "3/2": "0.75rem", // 12px
      2: "1rem", // 16px
      "5/2": "1.25rem", // 20px
      3: "1.5rem", // 24px
      4: "2rem", // 32px
      5: "2.5rem",
      6: "3rem",
      7: "3.5rem",
      8: "4rem",
      9: "4.5rem",
      10: "5rem",
      11: "5.5rem",
      12: "6rem",
      14: "7rem",
      17: "8.5rem",
      20: "10rem",
      "250p": "15.625rem",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0.25rem",
      md: "0.5rem",
      lg: "1.5rem",
      xl: "2.5rem",
      full: "9999px",
    },
    boxShadow: {
      none: "none",
      xs: "0 1px 0 0 rgba(0, 0, 0, 0.05)",
      sm: "0 0 1px 0  rgba(0, 0, 0, 0.05), 0 2px 1px 0 rgba(0, 0, 0, 0.05)",
      md: "0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 0 2px 0 rgba(0, 0, 0, 0.2)",
      l: "0 4px 20px 0 rgba(0, 0, 0, 0.15), 0 0 3px 0 rgba(0, 0, 0, 0.1)",
      xl: "0 0 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2);",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
      focus: "0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #0A76F6",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      6: "3rem", // 48px
    },
  },
  corePlugins: {
    fontVariantNumeric: false,
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
