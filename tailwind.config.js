/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          0: 'rgb(var(--color-primary-0) / <alpha-value>)',
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--color-primary-950) / <alpha-value>)'
        },
        secondary: {
          0: 'rgb(var(--color-secondary-0) / <alpha-value>)',
          50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
          950: 'rgb(var(--color-secondary-950) / <alpha-value>)'
        },
        tertiary: {
          0: 'rgb(var(--color-tertiary-0) / <alpha-value>)',
          50: 'rgb(var(--color-tertiary-50) / <alpha-value>)',
          100: 'rgb(var(--color-tertiary-100) / <alpha-value>)',
          200: 'rgb(var(--color-tertiary-200) / <alpha-value>)',
          300: 'rgb(var(--color-tertiary-300) / <alpha-value>)',
          400: 'rgb(var(--color-tertiary-400) / <alpha-value>)',
          500: 'rgb(var(--color-tertiary-500) / <alpha-value>)',
          600: 'rgb(var(--color-tertiary-600) / <alpha-value>)',
          700: 'rgb(var(--color-tertiary-700) / <alpha-value>)',
          800: 'rgb(var(--color-tertiary-800) / <alpha-value>)',
          900: 'rgb(var(--color-tertiary-900) / <alpha-value>)',
          950: 'rgb(var(--color-tertiary-950) / <alpha-value>)'
        },
        error: {
          0: 'rgb(var(--color-error-0) / <alpha-value>)',
          50: 'rgb(var(--color-error-50) / <alpha-value>)',
          100: 'rgb(var(--color-error-100) / <alpha-value>)',
          200: 'rgb(var(--color-error-200) / <alpha-value>)',
          300: 'rgb(var(--color-error-300) / <alpha-value>)',
          400: 'rgb(var(--color-error-400) / <alpha-value>)',
          500: 'rgb(var(--color-error-500) / <alpha-value>)',
          600: 'rgb(var(--color-error-600) / <alpha-value>)',
          700: 'rgb(var(--color-error-700) / <alpha-value>)',
          800: 'rgb(var(--color-error-800) / <alpha-value>)',
          900: 'rgb(var(--color-error-900) / <alpha-value>)',
          950: 'rgb(var(--color-error-950) / <alpha-value>)'
        },
        // 添加其他颜色...
        
        // 背景特殊色
        background: {
          error: 'rgb(var(--color-background-error) / <alpha-value>)',
          warning: 'rgb(var(--color-background-warning) / <alpha-value>)',
          success: 'rgb(var(--color-background-success) / <alpha-value>)',
          muted: 'rgb(var(--color-background-muted) / <alpha-value>)',
          info: 'rgb(var(--color-background-info) / <alpha-value>)'
        },
        
        // 指示器颜色
        indicator: {
          primary: 'rgb(var(--color-indicator-primary) / <alpha-value>)',
          info: 'rgb(var(--color-indicator-info) / <alpha-value>)',
          error: 'rgb(var(--color-indicator-error) / <alpha-value>)'
        }
      }
    },
  },
  safelist: [
    // 如果你想确保某些类即使在代码中没有直接使用也会被编译
    {
      pattern: /bg-(primary|secondary|tertiary|error)-(0|50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'focus']
    },
    {
      pattern: /text-(primary|secondary|tertiary|error)-(0|50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'focus']
    },
    // 添加其他你想确保被包含的类模式
  ],
  plugins: [],
}
