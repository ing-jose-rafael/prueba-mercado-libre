import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <header className='h-16 bg-yellow-300 px-4 flex'>
          <form action="/items" className='m-auto max-w-screen-xl flex-1'>
            <input className='h-8 w-full' type="text" name='search'/>
            <button type='submit'>Buscar</button>
          </form>
        </header>
      </body>
      <main className='max-w-xl px-4'>{children}</main>
    </html>
  )
}
