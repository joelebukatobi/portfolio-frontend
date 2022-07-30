import Layout from '@/components/Layout';
import Works from '@/components/Works';

export default function projects() {
  return (
    <Layout project={'navbar__projects'} title={'_projects'} pagetitle={'Projects'}>
      <Works />
    </Layout>
  );
}
