import Link from 'next/link';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Works heading={'_featured projects'} className="pt-16rem" />
      <section class="post container">
        <div className="post__heading">
          <h4>_recent blogposts</h4>
        </div>
        <div className="post__row">
          <div className="post__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
          <div className="post__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
          <div className="post__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
          <div className="post__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
          <div className="post__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
          <div className="post__card">
            <h4>First Blog Post</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada id enim dui, lacus ut cras. Pharetra
              nunc id diam vitae tristique enim, fermentum. Pretium duis cursus adipiscing convallis faucibus congue
              enim eu.
            </p>
            <Link href="">Read More</Link>
          </div>
        </div>
      </section>
      <Contact />
      <Copyright />
    </div>
  );
}
