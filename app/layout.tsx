import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ServiceWorkerProvider } from '@/components/service-worker-provider'
import { InstallPrompt } from '@/components/install-prompt'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InstaFashion AI - Calendário Instagram + IA para Personal Shoppers',
  description: 'Economize 10h/semana criando conteúdo. Gerencie posts, agende automaticamente, e cresça seus seguidores com calendário inteligente + IA.',
  manifest: '/manifest.json',
  themeColor: '#f09433',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'InstaFashion AI',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="InstaFashion" />
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
