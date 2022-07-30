import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDom from 'react-dom';

import Aside from '@/components/Aside.js';
import Share from '@/components/Share.js';
import Navbar from '@/components/Navbar';

import { API_URL } from '@/config/index';
import Copyright from '@/components/Copyright';
const qs = require('qs');

export default function Post({ post }) {
  return (
    <div>
      <Navbar blog={'navbar__blog'} pagetitle={'Blog'} />
      <section className="blogpost container">
        <div className="blogpost__image">
          <img src={post.attributes.image.data.attributes.formats.large.url} alt="" />
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

  const latest = qs.stringify(
    {
      populate: ['user', 'user.image', 'image', 'categories'],
      sort: ['date:desc'],
      pagination: {
        start: 0,
        limit: 6,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await Promise.all([fetch(`${API_URL}/api/blogposts?filters[slug][$eq]=${slug}&${query}`)]);
  const content = await Promise.all(res.map((res) => res.json()));
  // console.log(res);
  return {
    props: {
      post: content[0].data[0],
    },
  };
}
