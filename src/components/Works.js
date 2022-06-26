import Link from 'next/link';

export default function Works() {
  return (
    <section id="projects" className="works container ">
      <div className="works__grid">
        <div>
          <h4>featured</h4>
        </div>
        <div>
          <h4>others</h4>
        </div>
        <div className="works__card">
          <h5>Santis-Med</h5>
          <p>GATSBY ~ TAILWINDCSS ~ GRAPHQL</p>
          <p>
            SANTIS is a luxury membership based medical concierge service. At Santis our top priority is ensuring that
            you get the care you need in the most comfortable & seamless way.
          </p>
          <div className="works__card__group">
            <Link href="https://santismed.com/">
              <div className="works__card__link">
                <svg>
                  <use href="/images/sprite.svg#icon-live" />
                </svg>
                <p>Live</p>
              </div>
            </Link>
            {/* <div className="works__card__link">
              <svg>
                <use href="/images/sprite.svg#icon-code" />
              </svg>
              <p>Code</p>
            </div> */}
          </div>
        </div>
        <div className="works__card">
          <h5>Lyndem Edutainment</h5>
          <p>HTML ~ CSS ~ JAVASCRIPT</p>
          <p>
            Lyndem Edutainment Website - an educational service provider that engenders learning through the art of
            interactive play using educational games and activities.
          </p>
          <div className="works__card__group">
            <div className="works__card__link">
              <svg>
                <use href="/images/sprite.svg#icon-live" />
              </svg>
              <p>Live</p>
            </div>
            <div className="works__card__link">
              <svg>
                <use href="/images/sprite.svg#icon-code" />
              </svg>
              <p>Code</p>
            </div>
          </div>
        </div>
        <div className="works__card">
          <h5>Lyndem Edutainment</h5>
          <p>HTML ~ CSS ~ JAVASCRIPT</p>
          <p>
            Lyndem Edutainment Website - an educational service provider that engenders learning through the art of
            interactive play using educational games and activities.
          </p>
          <div className="works__card__group">
            <div className="works__card__link">
              <svg>
                <use href="/images/sprite.svg#icon-live" />
              </svg>
              <p>Live</p>
            </div>
            <div className="works__card__link">
              <svg>
                <use href="/images/sprite.svg#icon-code" />
              </svg>
              <p>Code</p>
            </div>
          </div>
        </div>
        <div className="works__card">
          <h5>WeCare-NG</h5>
          <p>HTML ~ CSS ~ JAVASCRIPT</p>
          <p>
            WeCare-Ng Is A Community Healthcare center that is committed to providing quality, comprehensive healthcare
            and specialized services to communities across Nigeria
          </p>
          <div className="works__card__group">
            <Link href="https://wecare-ng.com/">
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
          <h5>Lyndem Edutainment</h5>
          <p>HTML ~ CSS ~ JAVASCRIPT</p>
          <p>
            Lyndem Edutainment Website - an educational service provider that engenders learning through the art of
            interactive play using educational games and activities.
          </p>
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
        <div className="works__card">
          <h5>Lyndem Edutainment</h5>
          <p>HTML ~ CSS ~ JAVASCRIPT</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          <div className="works__card__group">
            <div className="works__card__link">
              <svg>
                <use href="/images/sprite.svg#icon-live" />
              </svg>
              <p>Live</p>
            </div>
            <div className="works__card__link">
              <svg>
                <use href="/images/sprite.svg#icon-code" />
              </svg>
              <p>Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
