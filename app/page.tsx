import Link from 'next/link'
import { getSortedPostsData } from './lib/mdUtils'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-black mb-8">
          Home of the world famous College Football Viewers Guide
        </h1>
      </div>
      <ul className="space-y-6">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="bg-white rounded-lg shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
            <Link href={`/posts/${id}`} className="block p-6">
              <h2 className="text-xl font-semibold text-[rgb(36,85,163)] hover:underline mb-2">
                {title}
              </h2>
              <time className="text-sm text-gray-500">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

