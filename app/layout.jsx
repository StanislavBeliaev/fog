'use client'
import style from './globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useState, useEffect } from 'react';




export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={style.globals}>{children}</body>
      </html>
  )
}
