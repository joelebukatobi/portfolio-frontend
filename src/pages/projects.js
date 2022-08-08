import Layout from '@/components/Layout';
import Projects from '@/components/Projects';
import { API_URL } from '@/config/index';
const qs = require('qs');
export default function projects({ projects }) {
  return (
    <Layout project={'navbar__projects'} title="_projects" pagetitle={'Projects | JetDev'} url="projects">
      <section id="projects" className={`works container`}>
        <Projects projects={projects} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const projects = qs.stringify(
    {
      populate: ['image'],
      sort: ['createdAt:desc'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await Promise.all([fetch(`${API_URL}/api/projects?${projects}`)]);

  const content = await Promise.all(res.map((res) => res.json()));
  console.log(res);

  return {
    props: {
      projects: content[0].data,
    },
  };
}
