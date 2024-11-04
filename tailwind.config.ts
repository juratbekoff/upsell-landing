import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "yellow-300": "#FDE047",
                "yellow-400": "#FACC15",
                "neutral-400": "#A3A3A3",
                "neutral-700": "#404040",
                "neutral-800": "#262626",
                "neutral-900": "#171717",
                "neutral-950": "#0A0A0A",
            },
            fontFamily: {
                regular: "var(--font-sf-pro-regular)",
                medium: "var(--font-sf-pro-medium)",
                semibold: "var(--font-sf-pro-semibold)",
                bold: "var(--font-sf-pro-bold)",
            },
            fontSize: {
                xs: '18px',
                sm: '28px',
                base: '32px',
                xl: '48px',
                '2xl': '64px',
            },
            lineHeight: {
                xs: '18px',
                sm: '28px',
                base: '32px',
                xl: '48px',
                '2xl': '64px',
            },
            width: {
                '70': '70%',
                "90": "90%"
            }
        },
    },
    plugins: [
        require("tailwindcss-animate")
    ],
};
export default config;
