export const metadata = {
  title: 'Next.js App',
  description: 'Welcome to Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
