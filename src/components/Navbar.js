import Link from 'next/link';

export default function Navbar() {
  return (
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
            <li className="navbar__item">
              <Link href="#projects">projects</Link>
            </li>
            <li className="navbar__item">
              <Link href="#resume">resume</Link>
            </li>
            <li className="navbar__item">
              <Link href="">blog</Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" href="#contact">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
