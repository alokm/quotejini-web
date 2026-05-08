import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QuoteJini — AI-Powered Estimating for Contractors',
  description: 'Create professional quotes in seconds with AI. Built for electrical, plumbing, HVAC, and other trades.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: '#f5f5f7', color: '#1d1d1f' }}>
        {children}
      </body>
    </html>
  )
}
