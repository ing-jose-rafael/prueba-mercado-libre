import Link from 'next/link'
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
        <header className='h-16 bg-yellow-300 flex'>
          <form action="/items" className='m-auto  px-4 gap-4 flex max-w-screen-xl flex-1'>
            <Link href='/' className='text-yellow-800'>Mercadolibre</Link>
            <input className='h-8 flex-1 px-2 rounded-lg' type="text" name='search'/>
            <button className ='h-8 bg-gray-300 px-2 py-1 text-slate-700' type='submit'>Buscar</button>
          </form>
        </header>
      </body>
      <main className='max-w-xl px-4 m-auto'>{children}</main>
    </html>
  )
}
