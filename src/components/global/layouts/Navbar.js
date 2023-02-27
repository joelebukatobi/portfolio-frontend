// React
import { useState } from 'react';
// Next JS
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

export default function Navbar({
  project,
  resume,
  blog,
  contact,
  title,
  description,
  keywords,
  url,
  type,
  article_publisher,
  article_section,
  article_author,
  site_name,
  image,
  image_type,
  image_alt,
  image_width,
  image_height,
}) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content={site_name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="article:publisher" content={article_publisher} />
        <meta property="article:section" content={article_section} />
        <meta property="article:author" content={article_author} />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content={image_type} />
        <meta property="og:image:alt" content={image_alt ? `${image_alt}` : 'portfolio-open-graph-preview-image'} />
        <meta property="og:image:width" content={image_width} />
        <meta property="og:image:height" content={image_height} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:site" content="@joelebukatobi" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
      </Head>
      <AnimatedCursor
        innerSize={8}
        outerSize={24}
        color="212, 85, 36"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
        outerStyle={{ backgroundColor: '#f9b1711a', border: '.05rem solid #f9b1711a' }}
      />
      <div className="navbar__fixed">
        <div className="navbar container">
          <div className="navbar__mobile">
            <div className="navbar__logo">
              <a href="/">
                <span>&lt;</span>jetdev <span>&#47;&gt;</span>
              </a>
            </div>
            <div onClick={toggle} className="navbar__menu">
              <svg>
                <use href={open ? `/images/sprite.svg#icon-navbar-close` : `/images/sprite.svg#icon-navbar-menu`} />
              </svg>
            </div>
          </div>
          {open ? (
            <nav className="navbar__active">
              <div className="navbar__active__nav">
                <ul className="navbar__active__list">
                  <li className={`navbar__active__item ${project}`}>
                    <span>01</span>
                    <Link href="/projects">projects</Link>
                  </li>
                  <li className={`navbar__active__item ${resume}`}>
                    <span>02</span>
                    <Link href="/resume">resume</Link>
                  </li>
                  <li className={`navbar__active__item ${blog}`}>
                    <span>03</span>
                    <Link href="/blog">blog</Link>
                  </li>
                  <li className={`navbar__active__item ${contact}`}>
                    <span>04</span>
                    <Link href="/contact">contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          ) : (
            <nav className="navbar__nav ">
              <ul className="navbar__list">
                <li className={`navbar__item ${project}`}>
                  <Link href="/projects">projects</Link>
                </li>
                <li className={`navbar__item ${resume}`}>
                  <Link href="/resume">resume</Link>
                </li>
                <li className={`navbar__item ${blog}`}>
                  <Link href="/blog">blog</Link>
                </li>
                <li className={`navbar__item ${contact}`}>
                  <Link href="/contact">contact</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}

Navbar.defaultProps = {
  title: 'Joel Ebuka Tobi | Web Developer',
  site_name: 'Joel Ebuka Tobi | Web Developer',
  description: `Hi, there I'm a web developer who is passionate about solving problems with code and transforming ideas from pixels perfect designs to scalable products. My job description entails creating and building amazing experiences for the next billion users. My main focus is front-end development and user-interface design. At the moment I’m
  currently transitioning into a fullstack role while exploring the world of DevOps as well as technical writing.`,
  url: 'https://www.joelebukatobi.dev',
  type: 'profile',
  article_publisher: 'https://www.joelebukatobi.dev',
  article_author: 'Joel Ebuka Tobi',
  keywords:
    'web development, web design, software development, branding, identity branding, mobile app development, mobile app design, ui/ux design, IT consultancy, web development, html, css, tailwindcss, tailwind javascript, responsive design, seo optimization, frontend, front-end, backend, back-end, full stack, front-end development, backend development, frontend web development, backend web development, web design, cross-browser compatibility, user experience (UX), web performance optimization, react, vue, CMS, strapi, payload cms, web standards, accessibility, git, webpack, web development trends, web development best practices, jQuery, bootstrap, php, wordpress, laravel, amazon web services, docker, github, github actions, kubernetes, terraform, typescript, python, fast api, elixir, phoenix, testing, cypress',
  image: 'https://www.joelebukatobi.dev/images/og-image.png',
  image_type: 'image/jpg',
  image_alt: 'Open Graph Image',
  image_width: '1200',
  image_height: '627',
};
