import { experience } from '../../data/site';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

export const Experience = () => {
  return (
    <section className="container section text-white" id="section2" aria-labelledby="experience-heading">
      <ScrollReveal>
        <h2 id="experience-heading" className="section-title">
          Experiencia Laboral
        </h2>
      </ScrollReveal>

      <div className="timeline">
        {experience.map((item, index) => (
          <ScrollReveal key={item.company} delay={index * 100}>
            <article className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__card degrade">
                <div className="timeline__header">
                  <div className="timeline__meta">
                    <span className="timeline__period">{item.period}</span>
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt=""
                        className="timeline__logo"
                        loading="lazy"
                        width={32}
                        height={32}
                      />
                    )}
                  </div>
                  <h3 className="timeline__role">{item.role}</h3>
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline__company"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <span className="timeline__company">{item.company}</span>
                  )}
                </div>
                <p className="timeline__description">{item.description}</p>
                <ul className="timeline__tags">
                  {item.technologies.map((tech) => (
                    <li key={tech} className="tag-pill">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
