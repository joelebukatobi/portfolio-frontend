import Contact from '@/components/Contact';
import Resume from '@/components/Resume';
import Works from '@/components/Works';
import About from '../components/About';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Works />
      <Resume />
      <Contact />
    </div>
  );
}
