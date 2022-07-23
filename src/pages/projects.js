import Navbar from '@/components/Navbar';
import Works from '@/components/Works';
export default function projects() {
  return (
    <div>
      <Navbar project={'navbar__projects'} />
      <Works />
    </div>
  );
}
