'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { TerminalContextProvider } from 'react-terminal'
const ThemeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <TerminalContextProvider>{children}</TerminalContextProvider>
    </ThemeProvider>
  )
}

export default ThemeLayout
