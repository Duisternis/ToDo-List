/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'custom-background': '#1E1E1E',
                'custom-text': '#EFEFEF',
                'custom-subtext': '#A0A0A0',
            },
            fontFamily: {
                newsreader: ["Newsreader", "serif"],
                ropasans: ["Ropa Sans", "sans-serif"],
                times: ["Times New Roman", "serif"],
            },
        },
    },
    plugins: [],
}