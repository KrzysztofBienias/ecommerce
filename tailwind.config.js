/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/pages/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            screens: {
                xs: '400px',
            },
        },
        keyframes: {
            bounce1: {
                '0%, 100%': { transform: 'translateY(0) scale(1, 1)', animationTimingFunction: 'ease-in' },
                '45%': { transform: 'translateY(5em) scale(1, 1)', animationTimingFunction: 'linear' },
                '50%': { transform: 'translateY(5em) scale(1.5, 0.5)', animationTimingFunction: 'linear' },
                '55%': { transform: 'translateY(5em) scale(1, 1)', animationTimingFunction: 'ease-out' },
            },
        },
        animation: {
            'bouncing-ball': 'bounce1 1s linear infinite',
        },
    },
    plugins: [],
};
