import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ServiceWorkerProvider } from '@/components/service-worker-provider'
import { InstallPrompt } from '@/components/install-prompt'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InstaFashion AI - Calendário Instagram + IA para Personal Shoppers',
  description: 'Economize 10h/semana criando conteúdo. Gerencie posts, agende automaticamente, e cresça seus seguidores com calendário inteligente + IA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#f09433" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="InstaFashion" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ServiceWorkerProvider />
        {children}
        <InstallPrompt />
      </body>
    </html>
  )
}
