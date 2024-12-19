import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
  slug?: string;
  authors?: string;
  tags?: string[];
}

export function getSortedPostsData(): Omit<Post, 'content'>[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: matterResult.data.slug || id,
      authors: matterResult.data.authors,
      tags: matterResult.data.tags || []
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1
    else return -1
  })
}

export function getPostData(id: string): Post {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id and contentHtml
  return {
    id,
    content: matterResult.content,
    title: matterResult.data.title,
    date: matterResult.data.date,
    ...matterResult.data
  }
}

