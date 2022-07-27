import Link from 'next/link';

export default function Works({ heading }) {
  return (
    <section id="projects" className="works container ">
      <div className="works__heading">
        <h4>{heading}</h4>
      </div>
      <div className="works__grid">
        <div className="works__card">
          <figure>
            <img src="" alt="" />
          </figure>
          <h5>Santis-Med</h5>
          <p>SANTIS is a luxury membership based medical concierge service.</p>
          <p>GATSBY ~ TAILWINDCSS ~ GRAPHQL</p>
          <div className="works__card__group">
            <a href="https://santismed.com/">
              <div className="works__card__link">
                <svg>
                  <use href="/images/sprite.svg#icon-live" />
                </svg>
                <p>Live</p>
              </div>
            </a>
            <div className="works__card__link">
              <svg>
                <use href="/images/sprite.svg#icon-code" />
              </svg>
              <p>Code</p>
            </div>
          </div>
        </div>
        <div className="works__card">
          <figure>
            <img src="" alt="" />
          </figure>
          <h5>Jayk Academy</h5>
          <p>SANTIS is a luxury membership based medical concierge service.</p>
          <p>NEXT JS ~ SCSS ~ TAILWINDCSS</p>
          <div className="works__card__group">
            <Link href="https://www.jaykacademy.com/">
              <div className="works__card__link">
                <svg>
                  <use href="/images/sprite.svg#icon-live" />
                </svg>
                <p>Live</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="works__card">
          <figure>
            <img src="" alt="" />
          </figure>
          <h5>Lyndem Edutainment</h5>
          <p>SANTIS is a luxury membership based medical concierge service.</p>
          <p>HTML ~ CSS ~ JAVASCRIPT</p>
          <div className="works__card__group">
            <Link href="https://lyndemedutainment.com">
              <div className="works__card__link">
                <svg>
                  <use href="/images/sprite.svg#icon-live" />
                </svg>
                <p>Live</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
