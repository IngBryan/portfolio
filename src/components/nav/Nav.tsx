import { InputLi } from './components';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Nav.css';

interface Section {
  id: string;
  text: string;
}

interface Props {
  sections: Section[];
}

function scrollToSection(sectionId: string) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export const Nav = ({ sections }: Props) => {
  const sectionIds = sections.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top Nav" aria-label="Navegación principal">
      <div className="container-fluid Nav__container">
        <a className="navbar-brand Nav__brand" href="#section0" onClick={(e) => { e.preventDefault(); scrollToSection('section0'); }}>
          BS
        </a>
        <button
          className="navbar-toggler Nav__toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto Nav__list">
            {sections.map((section) => (
              <InputLi key={section.id} name="nav-item">
                <a
                  className={`nav-link Nav__link ${activeId === section.id ? 'Nav__link--active' : ''}`}
                  href={`#${section.id}`}
                  aria-current={activeId === section.id ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                >
                  {section.text}
                </a>
              </InputLi>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { scrollToSection };
