/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                standard: "1200px",
            },
            screens: {
                ssm: "17.5em", // 280
                sm: "36em", // 576
                "3xl": "120em",
                "4xl": "160em",
                "5xl": "240em",
            },
            colors: {
                primary: "#FFC700",
                tertiary: "#F2F3F4",
                text: "#494646",
            },
            // fontSize: {
            //     small: "1.25rem",
            //     medium: "1.5rem",
            //     large: "2rem",
            //     slarge: "3rem",
            //     "lg-small": "1rem",
            //     "lg-medium": "1.2rem",
            //     "lg-large": "1.8rem",
            //     "lg-slarge": "2.3rem",
            // },
        },
    },
    plugins: [],
};
