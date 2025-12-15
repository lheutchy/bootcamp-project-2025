import Image from 'next/image'
import connectDB from '@/database/db'
import blogSchema from '@/database/blogSchema'
import Blog from '@/database/blogSchema'
import Comment from '@/components/comment'
import { IComment } from '@/components/comment'

type Props = { params: { slug: string } }

async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}

export default async function BlogPage({ params }: Props) {
  const { slug } = params

  await connectDB()
  const blog = (await blogSchema.findOne({ slug }).lean()) as Blog | null

  if(!blog) {
    return(
      <h1>Page Not Found</h1>
    )
  }

  const imageSrc = blog.image && blog.image.startsWith('/') ? blog.image : `/images/${blog?.image ?? 'default.jpg'}`

  return (
    <main>
      <h1>{blog?.title}</h1>
      <p>{String(blog?.date)}</p>

      {imageSrc && (
        <div>
          <Image src={imageSrc} alt={blog?.title ?? 'blog image'} width={1000} height={500} />
        </div>
      )}

      <div>
        {blog?.description ? (
          <div dangerouslySetInnerHTML={{ __html: blog.description }} />
        ) : (
          <p>{blog?.description}</p>
        )}
      </div>

      <section>
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment = {comment} />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </section>

    </main>
  )
}