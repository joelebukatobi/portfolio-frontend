import Layout from '@/components/Layout';
import Aside from '@/components/Aside';
import Link from 'next/link';

import { API_URL } from '@/config/index';
const qs = require('qs');

export default function Category({ posts, categories, category }) {
  return (
    <Layout blog={'navbar__blog'} title={'_blog'}>
      <section className="blog container">
        <div className="blog__right">
          <Aside categories={categories} />
        </div>
        <div className="blog__left">
          <div className="blog__heading">
            <p>
              <Link href="/blog">Blog</Link> /{' '}
              <Link href={`/blog/category/${category.attributes.name}`}>{category.attributes.name}</Link>
            </p>
            <p>{category.attributes.description}</p>
          </div>
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

export async function getServerSideProps({ query: { category } }) {
  const query = qs.stringify(
    {
      populate: ['categories'],
      sort: ['createdAt:asc'],
      filters: {
        categories: {
          name: {
            $eq: category,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await Promise.all([
    fetch(`${API_URL}/api/blogposts?${query}`),
    fetch(`${API_URL}/api/categories?filters[name][$eq]=${category}`),
    fetch(`${API_URL}/api/categories`),
  ]);
  const content = await Promise.all(res.map((res) => res.json()));
  // console.log(res);
  return {
    props: {
      posts: content[0].data,
      category: content[1].data[0],
      categories: content[2].data,
    },
  };
}
