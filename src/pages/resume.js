import Navbar from '@/components/Navbar';
import Resume from '@/components/Resume';
export default function projects() {
  return (
    <div>
      <Navbar resume={'navbar__resume'} />
      <Resume />
    </div>
  );
}
