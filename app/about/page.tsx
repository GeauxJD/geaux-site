import { getPostData } from '../lib/mdUtils'
import ReactMarkdown from 'react-markdown'

export default function About() {
  const postData = getPostData('about')

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-4">{postData.title}</h1>
        <time className="text-gray-500">
          {new Date(postData.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </header>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{postData.content}</ReactMarkdown>
      </div>
    </article>
  )
}

