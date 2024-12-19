import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[rgb(36,85,163)] text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight hover:text-white/90 transition-colors"
          >
            Geaux Online
          </Link>
          <nav>
            <Link 
              href="/about" 
              className="text-sm text-white/90 hover:text-white transition-colors hover:underline"
            >
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          © 2023 Geaux Online
        </div>
      </footer>
    </div>
  )
}

