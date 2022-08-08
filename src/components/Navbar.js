import Head from 'next/head';
import Link from 'next/link';

export default function Navbar({ project, resume, blog, contact, pagetitle, description, keywords, url }) {
  return (
    <>
      <Head>
        <title>{pagetitle}</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://joelebukatobi.dev/${url}`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image" content="/images/image-og.png" />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.svg" />
      </Head>
      <div className="navbar__container">
        <div className="navbar container">
          <div className="navbar__mobile">
            <div className="navbar__logo">
              <a href="/">
                <span>&lt;</span>jetdev <span>&#47;&gt;</span>
              </a>
            </div>
          </div>

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
                <Link href="/#contact">contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

Navbar.defaultProps = {
  pagetitle: 'Joel Ebuka Tobi | JetDev',
  description:
    'Frontend software developer, passionate about solving problems with code and transforming ideas from pixels to scalable products.',
  keywords:
    'web development, web design, software development, branding, identity branding, mobile app development, mobile app design, ui/ux design, IT consultancy,',
};
