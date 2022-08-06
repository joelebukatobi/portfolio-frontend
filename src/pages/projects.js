import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
const qs = require('qs');
export default function projects({ projects }) {
  return (
    <Layout project={'navbar__projects'} title={'_projects'} pagetitle={'Projects | JetDev'}>
      <section id="projects" className={`works container`}>
        <div className="works__grid">
          {projects.map((project) => (
            <div className="works__card">
              <figure>
                <img src={project.attributes.image.data.attributes.url} alt="project snapshot" />
              </figure>
              <h5>{project.attributes.name}</h5>
              <p>{project.attributes.description}</p>
              <p>{project.attributes.tools}</p>
              <div className="works__card__group">
                <a href={project.attributes.live}>
                  <div className="works__card__project">
                    <svg>
                      <use href="/images/sprite.svg#icon-link" />
                    </svg>
                    <p>Live</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const projects = qs.stringify(
    {
      populate: ['image'],
      sort: ['createdAt:asc'],
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
