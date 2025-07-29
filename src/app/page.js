import { client } from '../lib/sanity'






export default async function Home() {
    const query = `*[_type == "blog"] | order(_createdAt desc)`
  const blogs = await client.fetch(
    query,
    {cache:'no-store'});
  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          production
        </div>
      ))}
    </div>
  )
}