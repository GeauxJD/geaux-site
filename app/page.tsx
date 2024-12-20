import Link from 'next/link'
import { getSortedPostsData } from './lib/mdUtils'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">
        Home of the world famous College Football Viewers Guide
      </h1>
      <div className="space-y-4">
        {allPostsData.map(({ id, date, title }) => (
          <article 
            key={id} 
            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <Link href={`/posts/${id}`} className="block p-6">
              <h2 className="text-lg font-semibold text-[rgb(36,85,163)] hover:underline mb-2">
                {title}
              </h2>
              <time dateTime={date} className="text-sm text-gray-600">
                {date}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

