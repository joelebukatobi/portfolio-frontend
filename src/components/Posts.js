import Link from 'next/link';
export default function Posts({ posts, className, page }) {
  return (
    <div className={className}>
      {posts.map((post) => (
        <div
          className={`${page}__card`}
          onClick={() => (window.location.href = `/blog/${post.attributes.slug}`)}
          key={post.id}
        >
          <h4>{post.attributes.title}</h4>
          <p>{post.attributes.description.substring(0, 200)}...</p>
          <Link href={`/blog/${post.attributes.slug}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
