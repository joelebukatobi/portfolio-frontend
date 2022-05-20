import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="about container">
      <div className="about__text">
        <h2>
          Hi,👋🏼
          <br /> I’m <span>J</span>oel <span>E</span>buka <span>T</span>obi
        </h2>
        <h4>
          I’m a driven and passionate <span>UI/UX Designer & Frontend Developer</span>, creating and building amazing
          experiences for the next billion users. Currently learning how to integrate <span>Headless CMS </span>
          using <span>Strapi</span> and exploring the world of <span>DevOps</span> as well.
        </h4>
        <ul className="">
          <Link href="https://github.com/joelebukatobi">
            <li>
              <svg>
                <use href="/images/sprite.svg#icon-github" />
              </svg>
              <p>Github</p>
            </li>
          </Link>
          <Link href="https://dribbble.com/JetDev">
            <li>
              <svg>
                <use href="/images/sprite.svg#icon-dribble" />
              </svg>
              <p>Dribbble</p>
            </li>
          </Link>
          <Link href="https://twitter.com/joelebukatobi">
            <li>
              <svg>
                <use href="/images/sprite.svg#icon-twitter" />
              </svg>
              <p>Twitter</p>
            </li>
          </Link>{' '}
          <Link href="mailto:joelebuka@gmail.com">
            <li>
              <svg>
                <use href="/images/sprite.svg#icon-email" />
              </svg>
              <p>Email</p>
            </li>
          </Link>
        </ul>
      </div>
      <div className="about__image">
        <div className="bg">
          <img src="/images/header-image-bg.svg" alt="" />
        </div>
        <div className="picture">
          <img src="/images/image-one.png" alt="" />
        </div>
        <div className="icon">
          <div className="icon__figma">
            <svg viewBox="0 0 61 61">
              <use href="/images/sprite.svg#icon-figma" />
            </svg>
          </div>
          <div className="icon__strapi">
            <svg viewBox="0 0 61 61">
              <use href="/images/sprite.svg#icon-strapi" />
            </svg>
          </div>
          <div className="icon__next">
            <svg viewBox="0 0 61 61">
              <use href="/images/sprite.svg#icon-next" />
            </svg>
          </div>
        </div>
        <div className="text">
          <p>Frontend Developer</p>
          <p>UI Designer</p>
        </div>
      </div>
    </section>
  );
}
