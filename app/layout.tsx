import "./globals.css"

export const metadata = {
  title: "Nilo Saúde - Campanhas",
  description: "Plataforma de campanhas de saúde",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
