import "./globals.css"
import type { ReactNode } from "react"
import { Inter, Poppins } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "India Post - Modern Redesign",
  description: "A modern redesign of India Post's website UI.",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
