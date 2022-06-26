import Contact from '@/components/Contact';
import Resume from '@/components/Resume';
import Works from '@/components/Works';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Works />
      <Resume />
      <Contact />
      <Copyright />
    </div>
  );
}
