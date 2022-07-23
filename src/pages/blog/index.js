import Navbar from '@/components/Navbar';
import Aside from '@/components/Aside';
import Link from 'next/link';
export default function index() {
  return (
    <div>
      <Navbar blog={'navbar__blog'} />
      <section className="blog container">
        <div className="blog__left">
          <div className="blog__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu. Pretium duis cursus adipiscing convallis faucibus congue enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
          <div className="blog__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu. Pretium duis cursus adipiscing convallis faucibus congue enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
          <div className="blog__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu. Pretium duis cursus adipiscing convallis faucibus congue enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
        </div>
        <div className="blog__right">
          <Aside />
        </div>
      </section>
    </div>
  );
}
