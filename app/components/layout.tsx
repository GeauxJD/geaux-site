import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[rgb(36,85,163)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-white hover:opacity-90 transition-opacity"
            >
              Geaux Online
            </Link>
            <nav>
              <Link 
                href="/about" 
                className="text-sm text-white hover:opacity-90 transition-opacity"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <footer className="py-6 bg-gray-50 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          © 2023 Geaux Online
        </div>
      </footer>
    </div>
  )
}

