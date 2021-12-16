// Defaults: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
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
      f10: ".625rem",
      f12: ".75rem",
      f14: ".875rem",
      f16: "1rem",
      f17: "1.0625rem",
      f18: "1.125rem",
      f19: "1.1875rem",
      f20: "1.25rem",
      f21: "1.3125rem",
      f22: "1.375rem",
      f23: "1.4375rem",
      f24: "1.5rem",
      f26: "1.625rem",
      f28: "1.75rem",
      f30: "1.875rem",
      f32: "2rem",
      f38: "2.375rem",
      f45: "2.8125rem",
    },
    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.7",
      loose: "2",
      12: ".75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
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
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0.25rem", // 4px
      md: "0.5rem", // 8px
      lg: "1.5rem", // 12px
      xl: "2.5rem", // 40px
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
  },
  corePlugins: {
    fontVariantNumeric: false,
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
