import Layout from '@/components/Layout';
import Resume from '@/components/Resume';
export default function projects() {
  return (
    <Layout resume={'navbar__resume'} title="_resume" pagetitle={'Resume | JetDev'}>
      <Resume />
    </Layout>
  );
}
