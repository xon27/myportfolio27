import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BASIC/DEPT®',
  description: 'A global branding and digital design agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

