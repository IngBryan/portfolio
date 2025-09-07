import {InputLi} from './components'
import './Nav.css'

interface Section {
    id: string;   
    text: string; 
  }
  
  interface Props {
    sections: Section[];  // Array de objetos con id y texto de las secciones
  }

function scrollToSection(sectionId:string) {  

  setTimeout(() => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const rect = targetSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 30;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
}

export const Nav = ({ sections }: Props)=>{
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top Nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <span className="navbar-brand ms-5" style={{fontSize: '30px'}}>BS</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">              
              {sections.map((section, index) => (
                <InputLi key={index} name="nav-item">
                    <a className="nav-link active" href='#' onClick={()=>scrollToSection(section.id)}>
                      {section.text}
                    </a>
                </InputLi>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    )
}