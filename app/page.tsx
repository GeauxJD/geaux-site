import Link from 'next/link'
import { getSortedPostsData } from './utils/mdUtils'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <>
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-black mb-4">Home of the world famous College Football Viewers Guide</h1>
      </div>
      <ul className="space-y-4">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="bg-white shadow rounded-lg p-6">
            <Link href={`/posts/${id}`} className="text-xl font-semibold text-[rgb(36,85,163)] hover:underline">
              {title}
            </Link>
            <br />
            <small className="text-gray-500">{date}</small>
          </li>
        ))}
      </ul>
    </>
  )
}

