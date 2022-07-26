import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Works from '@/components/Works'
import Contact from '@/components/Contact'
import Copyright from '@/components/Copyright'

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Works />
      <Contact />
      <Copyright />
    </div>
  );
}
