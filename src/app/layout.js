import './globals.css';
import { Inter } from 'next/font/google';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from '../contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aaron Anablon Portfolio',
  description: 'My portfolio to showcase my projects until I land a job as a web developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
