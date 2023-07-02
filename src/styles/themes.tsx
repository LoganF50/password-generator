const defaultTheme = {
  borderStyles: {
    none: "none",
    solid: "solid",
  },
  borderRadius: {
    none: "0",
    base100: "0.25rem",
    base200: "0.375rem",
    base300: "0.5rem",
    base400: "1rem",
    base500: "2rem",
    circular: "9999rem",
  },
  borderWidth: {
    none: "0",
    base100: "1px",
    base200: "2px",
    base300: "4px",
    base400: "8px",
  },
  boxShadow: {
    primary: "5px 5px 10px 0 rgba(0, 0, 0, 0.15)",
  },
  breakpoint: {
    mobileSm: "320px",
    mobileMd: "375px",
    mobileLg: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopLg: "1440px",
    desktop: "2560px",
  },
  color: {
    accent: "#a4ffaf",
    background: {
      gradient: "linear-gradient(#14131b, #08070b)",
      primary: "#24232c",
      secondary: "#18171f",
    },
    text: {
      primary: "#e6e5ea",
      secondary: "#817d92",
    },
    states: {
      orange: "#fb7c58",
      red: "#f64a4a",
      yellow: "#f8cd65",
    },
  },
  duration: {
    short: "250ms",
    medium: "375ms",
    long: "500ms",
  },
  fontFamily: {
    primary: "'JetBrains Mono', monospace",
  },
  fontSize: {
    base100: "0.75rem",
    base200: "0.875rem",
    base300: "1rem",
    base400: "1.125rem",
    base500: "1.25rem",
    base600: "1.5rem",
    base700: "2rem",
    base800: "3rem",
    base900: "4rem",
    base1000: "6rem",
  },
  fontWeight: {
    bold: "700",
  },
  spacing: {
    base100: "0.125rem",
    base200: "0.25rem",
    base300: "0.5rem",
    base400: "0.75rem",
    base500: "1rem",
    base600: "1.25rem",
    base700: "1.75rem",
    base800: "2rem",
    base900: "2.25rem",
    base1000: "3rem",
  },
};

const darkTheme = {
  name: "dark",
  color: {
    ...defaultTheme.color,
  },
};

export const Themes = {
  dark: {
    ...defaultTheme,
    name: darkTheme.name,
    color: darkTheme.color,
  },
};
