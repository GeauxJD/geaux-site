import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-[rgb(36,85,163)] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Geaux Online
          </Link>
          <nav>
            <Link href="/about" className="text-sm hover:underline">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">{children}</main>
      <footer className="bg-gray-200 mt-8 p-4">
        <div className="container mx-auto text-center">
          © 2023 Geaux Online
        </div>
      </footer>
    </>
  )
}

