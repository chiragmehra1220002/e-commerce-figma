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
        background: "var(--background)",
        foreground: "var(--foreground)",
       
      },
      fontFamily: {
        Volkov: "Volkhov, serif", 
        Poppins:"Poppins, serif",
      },
      screens: {
        'xs':'100px',
        'sm': '300px',
        'md': '650px',
        'lg': '1540px',
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config;
