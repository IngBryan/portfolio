import {InputLi} from './components'
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
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top tipografia"style={{background:'#1a0b2e'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img alt="BS" style={{ width: '40px', height: 'auto' }} />
          </a>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">              
              {sections.map((section, index) => (
                <InputLi key={index} name="nav-item me-5">
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