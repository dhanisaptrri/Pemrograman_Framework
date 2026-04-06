import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/AppShell'
import Navbar from '@/components/layouts/navbar'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SessionProvider session={pageProps.session}>
      {/* 1. Script Google Analytics Utama (External) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID"
        strategy="afterInteractive"
      />

      {/* 2. Script Konfigurasi (Inline) */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MEASUREMENT_ID');
        `}
      </Script>

      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  )
}
