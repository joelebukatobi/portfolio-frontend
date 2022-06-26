import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="about container">
      <div className="about__image">
        <img src="/images/image-one.png" alt="" />
      </div>
      <div className="about__text">
        <div className="about__name">
          <h1>
            Joel <br /> Ebuka Tobi
          </h1>
        </div>
        <div className="about__me">
          <div className="about__social">
            <div className="about__decor">
              <hr />
            </div>
          </div>
          <div className="about__content">
            <h3>
              Frontend Developer
              <span> & </span>
              UI/UX Designer
            </h3>
            <h5>
              My job description entails creating and building amazing experiences for the next billion users. I’m
              currently learning how to integrate Headless CMS using Strapi and exploring the world of DevOps as well.
            </h5>
            <ul className="about__list">
              <Link href="">
                <li>
                  <svg>
                    <use href="/images/sprite.svg#icon-github" />
                  </svg>
                  <p>Github</p>
                </li>
              </Link>
              <Link href="">
                <li>
                  <svg>
                    <use href="/images/sprite.svg#icon-dribbble" />
                  </svg>
                  <p>Dribble</p>
                </li>
              </Link>
              <Link href="">
                <li>
                  <svg>
                    <use href="/images/sprite.svg#icon-twitter" />
                  </svg>
                  <p>Twitter</p>
                </li>
              </Link>
              <Link href="">
                <li>
                  <svg>
                    <use href="/images/sprite.svg#icon-email" />
                  </svg>
                  <p>Email</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
