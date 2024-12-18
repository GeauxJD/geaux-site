import { getPostData, getSortedPostsData } from '../../utils/mdUtils'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default function Post({ params }: { params: { id: string } }) {
  const postData = getPostData(params.id)

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">{postData.date}</div>
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </article>
  )
}

