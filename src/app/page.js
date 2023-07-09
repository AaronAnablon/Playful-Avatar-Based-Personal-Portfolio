"use client"
import App from "@/pages/_app"
import { ThemeProvider } from '../contexts/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <main>
        <App />
      </main>
    </ThemeProvider>
  )
}
