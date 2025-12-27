/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add paths to all of your template files
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 1. Colors from our CSS variables
      colors: {
        primary: '#4f46e5', // Your existing primary color
        secondary: '#6b7280',
        accent: '#10b981',
        'text-main': '#111827',
        danger: {
          light: '#fee2e2', // For backgrounds
          DEFAULT: '#ef4444', // For borders and icons
          dark: '#b91c1c',  // For text
        },
      },
      // 2. Spacing based on common padding values
      // Tailwind uses a 4px scale, so 12px=3, 24px=6, 32px=8
      spacing: {
        '3': '12px',
        '6': '24px',
        '8': '32px',
      },
      // 3. Font sizes
      fontSize: {
        'base': '16px', // Corresponds to .btn
        '4xl': '36px', // Corresponds to h1 (Tailwind's 3xl is 30px, 4xl is 36px)
      },
      // 4. Font families
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      // 5. Border radius
      borderRadius: {
        'lg': '8px',  // Corresponds to .btn
        '2xl': '16px', // Corresponds to .card
      },
      // 6. Box shadow
      boxShadow: {
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'focus-ring': '0 0 0 3px rgba(79, 70, 229, 0.4)',
      },
    },
  },
  plugins: [],
}