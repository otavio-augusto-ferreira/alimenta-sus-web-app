import type { Metadata } from 'next'
// Importando as fontes corretas
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import { Layout } from "main/src/components/ui/Layout";


// Configurando a fonte para TÍTULOS (Montserrat Bold)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-montserrat', // Variável CSS para o Tailwind
})

// Configurando a fonte para CORPO DE TEXTO (Open Sans)
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans', // Variável CSS para o Tailwind
})

export const metadata: Metadata = {
  title: 'Alimenta SUS',
  description: 'Aplicação de Orientação Alimentar para o SUS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${openSans.variable} font-body bg-brand-neutral text-occa-brown`}>
        {/* Aqui aplicamos o Layout! 
          Todo o conteúdo (children) será renderizado dentro dele.
        */}
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}