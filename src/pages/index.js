import Link from 'next/link';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Copyright from '@/components/Copyright';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function Home({ posts }) {
  return (
    <div>
      <Navbar />
      <About />
      <Works heading={'_featured projects'} className="pt-16rem" />
      <section className="post container">
        <div className="post__heading">
          <h4>_recent blogposts</h4>
        </div>
        <div className="post__row">
          {posts.map((post) => (
            <div className="post__card">
              <h4>{post.attributes.title}</h4>
              <p>{post.attributes.description.substring(0, 200)}...</p>
              <Link href={`/blog/${post.attributes.slug}`}>Read More</Link>
            </div>
          ))}
        </div>
      </section>
      <Contact />
      <Copyright />
    </div>
  );
}

export async function getServerSideProps() {
  const posts = qs.stringify(
    {
      sort: ['createdAt:asc'],
      pagination: {
        start: 0,
        limit: 6,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/blogposts?${posts}`);
  const content = await res.json();
  // console.log(res);

  return {
    props: {
      posts: content.data,
    },
  };
}
