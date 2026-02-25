import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Salt Run - Home Maintenance Subscription | Ogden, Layton, Farmington',
  description: 'Smart home maintenance for your salt, filters, HVAC, and water heater. One subscription. Zero hassle. Serving Northern Utah.',
  openGraph: {
    title: 'Salt Run - Home Maintenance Subscription',
    description: 'No lifting. No forgetting. No thinking about it.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
