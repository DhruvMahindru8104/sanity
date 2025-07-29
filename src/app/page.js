// app/page.js
import { client } from '../lib/sanity'

export const revalidate = 0; // 🚀 Means always fresh data

export default async function Home() {
  const query = `*[_type == "blog"] | order(_createdAt desc)`
  const blogs = await client.fetch(query)

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  )
}
