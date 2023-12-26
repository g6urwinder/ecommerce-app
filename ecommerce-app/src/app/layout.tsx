import type { Metadata } from 'next'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: 'Ecommerce application!',
    description: 'This is what will be displayed in google',
    keywords: 'Farming Products, Shop, Ecommerce'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body>
          <Navbar/>
          {children}
          <Footer/>
          </body>
    </html>
  )
}
