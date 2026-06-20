import './App.css';
import {
  Nav,
  Card,
  ContactForm,
  Hero,
  Experience,
  TechStack,
  Footer,
  ScrollReveal,
} from './components';
import { scrollToSection } from './components/nav/Nav';
import { projects } from './data/site';

const NAV_SECTIONS = [
  { id: 'section0', text: 'Inicio' },
  { id: 'section1', text: 'Sobre mí' },
  { id: 'section2', text: 'Experiencia' },
  { id: 'section3', text: 'Proyectos' },
  { id: 'section4', text: 'Tecnologías' },
  { id: 'section5', text: 'Contacto' },
];

function App() {
  return (
    <>
      <Nav sections={NAV_SECTIONS} />

      <Hero onNavigate={scrollToSection} />

      <section className="container section text-white" id="section1" aria-labelledby="about-heading">
        <ScrollReveal>
          <h2 id="about-heading" className="about-text about-text--lead">
            Soy analista en computación.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="text-start about-text mt-3">
            Actualmente trabajo como desarrollador Junior en{' '}
            <a
              href="https://www.montevideocomm.uy"
              target="_blank"
              rel="noopener noreferrer"
              className="about-company-link"
            >
              <img src="/LogoMontevideoCOMM.jpg" alt="Logo Montevideo COMM" loading="lazy" width={27} height={28} />
              Montevideo COMM
            </a>
            .
          </p>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <p className="text-start about-text about-text--body mt-4">
            Soy un desarrollador que recién comienza en la industria, pero con una fuerte pasión por crear
            soluciones digitales eficientes, usables y alineadas con las necesidades del cliente. Me destaco
            por mi capacidad de aprendizaje continuo y un enfoque práctico orientado a la resolución de
            problemas.
          </p>
        </ScrollReveal>
      </section>

      <Experience />

      <section className="container section text-white" id="section3" aria-labelledby="projects-heading">
        <ScrollReveal>
          <h2 id="projects-heading" className="section-title">
            Proyectos
          </h2>
        </ScrollReveal>
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 100}>
            <Card
              mainRoutes={project.mainRoutes}
              title1={project.title1}
              title2={project.title2}
              body={project.body}
              tags={project.tags}
              imageTechnology={project.imageTechnology}
              imageLeft={project.imageLeft}
              id={project.id}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          </ScrollReveal>
        ))}
      </section>

      <TechStack />

      <section className="container section text-white contact-section" id="section5" aria-labelledby="contact-heading">
        <ScrollReveal>
          <h2 id="contact-heading" className="section-title section-title--center">
            Contacto
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ContactForm />
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
}

export default App;
