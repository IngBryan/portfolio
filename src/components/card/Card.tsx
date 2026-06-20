import { Carousel } from './components';
import { TechIconProps } from '../TechIcon/TechIcon';

export interface Data {
  route: string;
  type: 'image' | 'video';
}

interface Props {
  mainRoutes: Data[];
  title1: string;
  title2: string;
  body: string;
  tags: string[];
  imageTechnology: TechIconProps[];
  imageLeft: boolean;
  id: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const Card = (p: Props) => {
  return (
    <article className="project-card" aria-labelledby={`project-${p.id}`}>
      <div className={`row g-0 ${p.imageLeft ? 'flex-column-reverse flex-md-row' : 'flex-column flex-md-row'}`}>
        {p.imageLeft && (
          <div className="col-md-4 project-card__media d-flex align-items-center position-relative">
            <img
              src="/Gradient-3.png"
              alt=""
              className="position-absolute top-0 start-0 w-100 h-100 project-card__media-bg"
              loading="lazy"
            />
            <div className="position-relative w-100" style={{ zIndex: 1 }}>
              <Carousel id={p.id} items={p.mainRoutes} />
            </div>
          </div>
        )}

        <div className={`col-md-7 d-flex align-items-center ${!p.imageLeft ? 'me-0 me-sm-4' : 'ms-0 ms-sm-4'}`}>
          <div className="card-body p-3 p-md-4">
            <p className="project-card__subtitle">{p.title1}</p>
            <h3 id={`project-${p.id}`} className="project-card__title">
              {p.title2}
            </h3>
            <p className="project-card__body-text">{p.body}</p>

            <ul className="project-card__tags" aria-label="Tecnologías del proyecto">
              {p.tags.map((tag) => (
                <li key={tag} className="tag-pill">
                  {tag}
                </li>
              ))}
            </ul>

            {(p.demoUrl || p.githubUrl) && (
              <div className="project-card__actions">
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    Ver demo
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {!p.imageLeft && (
          <div className="col-md-4 project-card__media d-flex align-items-center position-relative">
            <img
              src="/Gradient-3.png"
              alt=""
              className="position-absolute top-0 start-0 w-100 h-100 project-card__media-bg"
              loading="lazy"
            />
            <div className="position-relative w-100" style={{ zIndex: 1 }}>
              <Carousel id={p.id} items={p.mainRoutes} />
            </div>
          </div>
        )}
      </div>

      <div className="row pb-3">
        <div className="col-12 d-flex justify-content-center gap-3 flex-wrap px-3">
          {p.imageTechnology.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.tooltip}
              loading="lazy"
              width={48}
              height={48}
              style={{ background: 'transparent', border: 'none', borderRadius: 8 }}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
