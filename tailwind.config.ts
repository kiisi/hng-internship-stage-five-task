import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#633CFF",
        "primary-alt": "#beadff",
        "primary-light": "#efebff",
        "red": "#ff3939",
        "whitesmoke": "#fafafa",
        "gray": "#333333",
        "gray-alt": "#737373",
        "gray-light": "#d9d9d9"
      }
    },
  },
  plugins: [],
};
export default config;
