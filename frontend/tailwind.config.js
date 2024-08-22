/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "50px": "50px",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
        "250px": "250px",
        "300px": "300px",
        350: "350px",
        "400px": "400px",
        "450px": "450px",
        "500px": "500px",
        "550px": "550px",
        "600px": "600px",
        "650px": "650px",
        "700px": "700px",
        "750px": "750px",
        "800px": "800px",
        "850px": "850px",
        "900px": "900px",
        "950px": "950px",
        "1000px": "1000px",
        "1050px": "1050px",
        "1100px": "1100px",
        "1150px": "1150px",
        "1200px": "1200px",
        "1250px": "1250px",
        "1300px": "1300px",
        "1350px": "1350px",
        "1400px": "1400px",
        "1450px": "1450px",
        "1500px": "1500px",
        "1550px": "1550px",
        "1600px": "1600px",
        "1650px": "1650px",
        "1700px": "1700px",
        "1750px": "1750px",
        "1800px": "1800px",
        "1850px": "1850px",
        "1900px": "1900px",
        "1950px": "1950px",
        "2000px": "2000px",
      },
      colors: {
        "custom-blue": "#1e3a8a",
        "custom-red": "#dc2626",
        "custom-green": "#16a34a",
        "custom-yellow": "#facc15",
        "custom-purple": "#7c3aed",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.2)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.3)",
        xl: "5px 5px 10px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-xl-blue': {
          'text-shadow': '5px 5px 3px rgba(30, 58, 138, 0.5)',
        },
        '.text-shadow-xl-red': {
          'text-shadow': '5px 5px 10px rgba(220, 38, 38, 0.5)',
        },
        '.text-shadow-xl-green': {
          'text-shadow': '5px 5px 10px rgba(22, 163, 74, 0.5)',
        },
        '.text-shadow-xl-yellow': {
          'text-shadow': '5px 5px 10px rgba(250, 204, 21, 0.5)',
        },
        '.text-shadow-xl-purple': {
          'text-shadow': '5px 5px 10px rgba(124, 58, 237, 0.5)',
        },
        '.text-shadow-xl-black': {
          'text-shadow': '5px 5px 10px rgba(0, 0, 0, 0.5)',
        },
        // Add more custom utilities as needed
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
