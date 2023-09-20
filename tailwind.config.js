/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "435px",
            },
            colors: {
                primary: "#FFC700",
                tertiary: "#F2F3F4",
                text: "#494646",
            },
            fontSize: {
                small: "1.25rem",
                medium: "1.5rem",
                large: "2rem",
                slarge: "3rem",
            },
            
        },
    },
    plugins: [],
};
