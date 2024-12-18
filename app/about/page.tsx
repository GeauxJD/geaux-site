import { getPostData } from '../utils/mdUtils'
import ReactMarkdown from 'react-markdown'

export default function About() {
  const postData = getPostData('about')

  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">{postData.date}</div>
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </article>
  )
}

