import type { Config } from "tailwindcss";

const path = require("path");

const config: Config = {
    content: [path.join(__dirname, "src/**/!(*.d).{ts,js,jsx,tsx}")],
    // content: [
    //   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    //   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    //   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
