import { siteConfig } from '../../data/site';
import { SpecialText } from '../specialText/SpecialText';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';
import image1 from '/foto.jpg';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="hero container text-white" id="section0" aria-label="Inicio">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="row g-4 align-items-center hero__content">
        <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start">
          <ScrollReveal>
            <div className="hero__photo-wrapper">
              <img
                src={image1}
                className="hero__photo"
                id="img1"
                alt={`Foto de ${siteConfig.name}`}
                loading="eager"
                width={300}
                height={300}
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="col-12 col-md-7">
          <ScrollReveal delay={100}>
            <SpecialText text1="Hola! Soy " text2="Bryan Salamone." />
            <div className="hero__tagline">
              <span className="hero__tagline-lead">Un Desarrollador que</span>
              <span className="hero__tagline-main">
                Aprende <span className="elipse">Continuamente...</span>
              </span>
              <span className="hero__tagline-sub">Porque quedarse quieto es quedarse atrás.</span>
            </div>

            <div className="hero__actions">
              <button
                type="button"
                className="btn btn-primary-custom"
                onClick={() => onNavigate('section3')}
              >
                Ver proyectos
              </button>
              <button
                type="button"
                className="btn btn-outline-custom"
                onClick={() => onNavigate('section5')}
              >
                Contactar
              </button>
            </div>

            <div className="hero__social">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hero__social-link"
              >
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hero__social-link"
              >
                LinkedIn
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hero__social-link">
                Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
