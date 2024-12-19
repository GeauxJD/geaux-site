import { getPostData, getSortedPostsData, Post } from '../../lib/mdUtils'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default function Post({ params }: { params: { id: string } }) {
  const postData: Post = getPostData(params.id)
  
  // Format the date
  const formattedDate = new Date(postData.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">{formattedDate}</div>
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </article>
  )
}
