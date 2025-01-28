/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            table: {
              borderCollapse: "collapse",
              border: "1px solid #D1D5DB", // Replace with your desired border color
            },
            "table thead th": {
              color: "#1D4ED8", // Replace with your desired hex color
              border: "1px solid #D1D5DB", // Replace with your desired border color
            },
            "table tbody tr:nth-child(odd)": {
              backgroundColor: "#F3F4F6", // Replace with your desired hex color
            },
            "table tbody tr:nth-child(even)": {
              backgroundColor: "#FFFFFF", // Replace with your desired hex color
            },
            "table tbody td": {
              border: "1px solid #D1D5DB", // Replace with your desired border color
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
