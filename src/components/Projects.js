export default function Projects({ projects }) {
  return (
    <div className="works__grid">
      {projects.map((project) => (
        <div
          href={project.attributes.live}
          className="works__card"
          onClick={() => window.open(`${project.attributes.live}`, '_blank')}
          key={project.id}
        >
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
  );
}
