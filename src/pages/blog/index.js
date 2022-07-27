import Layout from '@/components/Layout';
import Aside from '@/components/Aside';
import Link from 'next/link';

export default function index() {
  return (
    <Layout blog={'navbar__blog'}>
      <section className="blog container">
        <div className="blog__right">
          <Aside />
        </div>
        <div className="blog__left">
          <div className="blog__card">
            <h4>First Post</h4>
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
      </section>
    </Layout>
  );
}
