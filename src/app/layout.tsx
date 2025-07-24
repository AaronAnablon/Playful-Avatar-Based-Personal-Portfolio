import './globals.css';
import { Inter } from 'next/font/google';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from '../contexts/ThemeContext';
import Favicon from "../../public/favicon.ico";
import { Metadata } from 'next';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aaron Anablon',
  description: 'I am Anablon, Aaron P. I am a full stack web developer. I can develop any web applications that you have in mind. I can also develop mobile applications accroding to you need. Anablon. Anablon. Anablon',
  icons: [{ rel: 'icon', url: Favicon.src }],
  verification: {
    google: "hIjirSgOXU2TNGYRlajftvngJ3Os6fyauSrQhzNzWxc",
  },
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
