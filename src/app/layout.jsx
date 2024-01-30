import { Inter, Lexend, Playfair_Display } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Holy Resurrection Orthodox Church',
    default: 'Holy Resurrection Orthodox Church - Tucson, Arizona',
  },
  description:
    '',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col pattern-plus-connected-amber-100/60 pattern-plus-connected-scale-[0.5]">{children}</body>
    </html>
  )
}
