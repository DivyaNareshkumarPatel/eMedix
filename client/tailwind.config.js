/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#4200FF',         // Main brand color
        secondary: '#ffffff',       // Background color or secondary elements
        grey: '#A7A7A7',           // General grey color
        lightGrey: '#DEDEDE',      // Light grey for borders or backgrounds
        black: '#404040',          // Main text color
        lightBlue: '#EDF2FB',      // Light blue for backgrounds or accents
        green: '#34A853',          // Success or positive action color
        red: '#EA4335',            // Error or negative action color
        
        // Add more colors as needed
        darkPrimary: '#2D00BF',    // Darker shade of primary color
        lightPrimary: '#8A2EFF',   // Lighter shade of primary color
        accent: '#FF5722',         // Accent color for highlights
        warning: '#FFC107',        // Warning color for alerts
        info: '#2196F3',           // Information color for info messages
        success: '#4CAF50',  
    }
  },
  plugins: [],
}
