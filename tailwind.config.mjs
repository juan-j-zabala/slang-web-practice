import animations from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      onest: ["Onest Variable"],
    },
    extend: {
      backgroundImage: {
        mountain: "url('/mountain.webp')",
        gref: "url('/grefposing.webp')",
        pista: "url('/pistas.webp')",
        compu: "url('/laptop.webp')",
      },
      backgroundColor: {
        "bg-base": "#020710",
      },
    },
  },
  plugins: [animations],
};
