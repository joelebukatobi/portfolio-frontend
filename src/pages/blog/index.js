import Layout from '@/components/Layout';
import Aside from '@/components/Aside';
import Link from 'next/link';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function index({ posts, categories }) {
  return (
    <Layout blog={'navbar__blog'} title="_blog" pagetitle={'Blog | JetDev'}>
      <section className="blog container">
        <div className="blog__right">
          <Aside categories={categories} />
        </div>
        <div className="blog__left">
          {posts.map((post) => (
            <div className="blog__card">
              <h4>{post.attributes.title}</h4>
              <p>{post.attributes.description.substring(0, 250)}...</p>
              <Link href={`/blog/${post.attributes.slug}`}>Read More</Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
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

  const res = await Promise.all([fetch(`${API_URL}/api/blogposts?${posts}`), fetch(`${API_URL}/api/categories`)]);
  const content = await Promise.all(res.map((res) => res.json()));
  // console.log(res);

  return {
    props: {
      posts: content[0].data,
      categories: content[1].data,
    },
  };
}
