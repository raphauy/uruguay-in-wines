import '@/styles/globals.css'
import { Metadata } from "next"

import { Toaster } from "@/components/ui/toaster"

import { TailwindIndicator } from "@/components/chadcn/tailwind-indicator"
import { ThemeProvider } from "@/components/chadcn/theme-provider"
import { siteConfig } from "@/config/site"
import { fontSans } from '@/utils/front/fonts'
import { cn } from "@/lib/utils"
import AuthContext from '@/utils/front/AuthContext'
import { Navbar } from '../components/navbar/navbar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export const metadata: Metadata = {
  title: "Uruguay in Wines: Discover Uruguayan Wines with Gabi Zimmer",
  description: "Explore the richness of Uruguayan wine guided by Gabi Zimmer, our site offers an extensive database of uruguayan wines complete with Gabi's professional tasting notes. Delve into our powerful search engine to find and learn about the wines that delight your taste buds. Join us and uncork the allure of Uruguayan wine!",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {  
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <AuthContext>

            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="container relative flex flex-col min-h-screen text-muted-foreground">
                <Navbar />
                
                <div className="flex flex-col items-center flex-1 w-full dark:text-white">
                  {children}                
                </div>

                <div className="flex justify-center">
                  <Link href="https://gabizimmer.com">
                    <Button variant="link" className='text-lg text-gz-verde-oscuro'>gabizimmer.com</Button>
                  </Link>
                </div>
                <Toaster />
              </div>            
              <TailwindIndicator />
            </ThemeProvider>

          </AuthContext>          
        </body>
      </html>
    </>
  )
}
