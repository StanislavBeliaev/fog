'use client'
import style from './globals.css'

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={style.globals}>{children}</body>
      </html>
  )
}
