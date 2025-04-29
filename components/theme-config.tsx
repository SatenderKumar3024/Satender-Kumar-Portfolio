// Theme configuration with cybersecurity-focused colors
export const themeConfig = {
  colors: {
    light: {
      primary: "#0056b3", // Deep trustworthy blue
      secondary: "#00a896", // Teal accent
      accent: "#38b2ac", // Soft teal
      success: "#2e7d32", // Security green
      warning: "#ff9800", // Alert orange
      danger: "#d32f2f", // Alert red
      background: "#f8f9fa",
      card: "#ffffff",
      text: "#1a202c",
      muted: "#718096",
    },
    dark: {
      primary: "#4299e1", // Bright blue
      secondary: "#38b2ac", // Teal accent
      accent: "#4fd1c5", // Bright teal
      success: "#48bb78", // Security green
      warning: "#ed8936", // Alert orange
      danger: "#f56565", // Alert red
      background: "#1a202c",
      card: "#2d3748",
      text: "#f7fafc",
      muted: "#a0aec0",
    },
  },
  animations: {
    fast: "0.2s",
    medium: "0.4s",
    slow: "0.6s",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
}
