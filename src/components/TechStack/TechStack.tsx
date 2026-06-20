import { techCategories } from '../../data/site';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

export const TechStack = () => {
  return (
    <section className="container section text-white" id="section4" aria-labelledby="tech-heading">
      <ScrollReveal>
        <h2 id="tech-heading" className="section-title section-title--center">
          Tecnologías
        </h2>
      </ScrollReveal>

      <div className="bento-grid">
        {techCategories.map((category, index) => (
          <ScrollReveal
            key={category.name}
            delay={index * 80}
            className={`bento-grid__item ${category.featured ? 'bento-grid__item--featured' : ''}`}
          >
            <h3 className="bento-grid__title">{category.name}</h3>
            <ul className="bento-grid__list">
              {category.items.map((item) => (
                <li key={item.name} className="tech-chip">
                  <img src={item.src} alt="" className="tech-chip__icon" loading="lazy" width={28} height={28} />
                  <span className="tech-chip__label">{item.name}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
