import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "next-themes"
import MenuBar from "@/components/sections/MenuBar"
import { ScrollingBackground } from "@/components/sections/ScrollingBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aniket Kadam | Full Stack Developer",
  description: "Portfolio of Aniket Kadam, a passionate Full Stack Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollingBackground />
          <MenuBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

