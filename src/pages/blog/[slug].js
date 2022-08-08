import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDom from 'react-dom';

import Aside from '@/components/Aside.js';
import Share from '@/components/Share.js';
import Navbar from '@/components/Navbar';

import { API_URL } from '@/config/index';
import Copyright from '@/components/Copyright';
import Head from 'next/head';
const qs = require('qs');

export default function Post({ post, keywords }) {
  return (
    <div>
      <Head>
        <meta name="description" content={post.attributes.description.substring(0, 100)} />
        <meta property="og:description" content={post.attributes.description.substring(0, 100)} />
        <meta property="og:url" content={`https://joelebukatobi.dev/blog/${post.attributes.slug} `} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar blog={'navbar__blog'} title="_blog" pagetitle={'Blog | JetDev'} />
      <section className="blogpost container">
        <div className="blogpost__image">
          <img src={post.attributes.image.data.attributes.formats.large.url} alt="blog image" />
        </div>
        <div className="blogpost__main">
          <div className="blogpost__aside">
            <Aside categories={post.attributes.categories.data} className={'blogpost__categories'} />
            <Share className={'blogpost__share'} />
          </div>
          <div className="blogpost__content">
            <h3>{post.attributes.title}</h3>
            <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
          </div>
        </div>
      </section>
      <Copyright />
    </div>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const query = qs.stringify(
    {
      populate: ['tags', 'user', 'image', 'categories'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await Promise.all([fetch(`${API_URL}/api/blogposts?filters[slug][$eq]=${slug}&${query}`)]);
  const content = await Promise.all(res.map((res) => res.json()));
  console.log(res);
  return {
    props: {
      post: content[0].data[0],
    },
  };
}

Post.defaultProps = {
  keywords:
    'web development, web design, software development, branding, identity branding, mobile app development, mobile app design, ui/ux design, IT consultancy,',
};
