import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 2) Identidade Visual Integrada (OCCA + Kit Alimenta SUS)
      colors: {
        // Paleta de Cores baseada no OCCA
        occa: {
          green: '#2E7D32', // Verde OCCA
          brown: '#4E342E', // Marrom OCCA
        },
        brand: {
          neutral: '#F5F5DC',      // Bege Neutro (Fundo)
          attention: '#C62828',   // Vermelho/Atenção
          accent: '#F2C230',       // Amarelo Acento
          secondary: '#2166AC',    // Azul Secundário
        },
      },
      fontFamily: {
        // Tipografia
        heading: ['var(--font-montserrat)', 'sans-serif'], // Títulos: Montserrat
        body: ['var(--font-open-sans)', 'sans-serif'],     // Corpo: Open Sans
      },
    },
  },
  plugins: [],
}
export default config