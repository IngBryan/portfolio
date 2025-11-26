import './App.css';
import { Nav, Card,SpecialText,TechIcon,ContactForm } from './components';
import image1 from '/foto.jpg';
function App() {
  return (
    <>
      <Nav
        sections={[
          { id: 'section0', text: 'Inicio' },
          { id: 'section1', text: 'Sobre mí' },
          { id: 'section2', text: 'Experiencia'},
          { id: 'section3', text: 'Proyectos' },
          { id: 'section4', text: 'Tecnologías' },
          { id: 'section5', text: 'Contacto' },
        ]}
      />
      <section className="container text-white mb-3" id="section0" >
        <div className="row g-0">
          <div className="col-auto mt-5 me-4 col-md-4 d-flex align-items-center justify-content-start">
            <img src={image1} className="img-mainPhoto" id="img1" alt="Imagen" />
          </div>
          <div className="col-md-6 ">
            <SpecialText text1="Hola! Soy " text2="Bryan Salamone."/>
            <p className="text-start tipografia">
              <span className='tipografia_size4 custom-span'>         
                Un Desarrollador que
              </span>
              <br/>
              <p style={{lineHeight:'1.26'}}>
                <span className='tipografia_size1'>Aprende <span className='tipografia_color1 elipse'>Continuamente...</span>
                </span>
                <br/>
                <span className='tipografia_size2'>Porque quedarse quieto es quedarse atrás.</span> 
              </p>            
            </p>
          </div>
        </div>
      </section>
        
      <section className="container p-2  text-white py-5" id="section1" >
        <h2 className="text-start tipografia tipografia_size1">Soy analista en computación.|</h2>
        <p className="text-start tipografia tipografia_size">Actualmente trabajo como desarrollador Junior en 
          <a href='https://www.montevideocomm.uy' target='_blank' rel='noopener noreferrer'>
            <img src="/portfolio/LogoMontevideoCOMM.jpg" className='img-thumbnail' alt="Logo"  style={{marginLeft:'6px',width:'27px',height:'28px' }} />
            <span>Montevideo COMM</span>
          </a>
          , 
        </p>
        <p className="text-start tipografia tipografia_size3 mt-5">
          Soy un desarrollador que recién comienza en la industria, 
          pero con una fuerte pasión por crear soluciones digitales eficientes, usables y alineadas con 
          las necesidades del cliente. Me destaco por mi capacidad de aprendizaje 
          continuo y un enfoque práctico orientado a la resolución de problemas.
        </p>
      </section>

      <section className="container p-2 text-white py-5 mb-1" id="section2">
        <h1 className="text-start tipografia tipografia_size6">
          <strong>Experiencia Laboral</strong>
        </h1>
        
        <div className="row g-3 mt-3">
          <div className="col-md-8">
            <div className="card degrade">
              <div className="row g-0 position-relative">
                
                <div className="col-12 col-md-5 d-flex justify-content-center align-items-center p-4 position-relative">
                  <img 
                    src="/portfolio/gx17.png" 
                    className="img-fluid img-card rounded-end" 
                    alt="Logo" 
                  />
                  <div className="ellipse"></div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="card-body">
                    <p className="text-start tipografia1 tipografia_size7 tipografia_color2" style={{fontWeight:'500'}}>
                      Desarrollador GeneXus
                    </p>
                    <p className="text-start tipografia1 tipografia_size8 tipografia_color2">
                      Trabajo con GeneXus 17 y 9. Principalmente en un sistema CRM y de gestión comercial.
                    </p>
                    <div className="text-start">
                      {/* WORK IN PROGRESS
                      <button className="btn tipografia_color2 tipografia1"
                        style={{
                          backgroundColor:'#2C1250',
                          border: '1px solid #693B93',
                          fontWeight: '500',
                          borderRadius:'10px'
                        }}
                      >
                        LEER MÁS
                      </button>*/}
                    </div>
                  </div>
                </div>                

              </div>
            </div>
          </div>
          <div className="col-md-4">

          </div>
        </div>
      </section>
      <section className="container p-0  text-white py-5 mb-5" id="section3">
      <h1 className="text-start tipografia tipografia_size1">
        <strong>Proyectos</strong>
      </h1>
        <Card 
          mainRoutes={[ { route: "/portfolio/portfolio.PNG", type: "image" }]}
          title1="Proyecto Destacado"
          title2="Mi Portafolio"
          body="Este portafolio fue desarrollado con React, TypeScript, 
                CSS , HTML y Bootstrap.
                Cada sección tiene un objetivo específico: presentarme, mostrar mis proyectos, listar mis conocimientos y ofrecer una forma de contactarme fácilmente."
          imageTechnology={[
            { src: '/portfolio/react48.png', alt: 'React', tooltip: 'React' },
            { src: '/portfolio/typescript48.png', alt: 'TypeScript', tooltip: 'TypeScript' },
            { src: '/portfolio/html48.png', alt: 'HTML', tooltip: 'HTML' },
            { src: '/portfolio/css48.png', alt: 'CSS', tooltip: 'CSS' },
            { src: '/portfolio/bootstrap48.png', alt: 'Bootstrap', tooltip: 'Bootstrap' }
          ]}
          imageLeft={false}
          id="Portfolio"
        />
        <Card 
          mainRoutes={[ { route: "/portfolio/Antel1.PNG", type: "image" },{ route: "/portfolio/AntelChallenge2025.mp4", type: "video" }]}
          title1="Proyecto Destacado"
          title2="Antel Challenge"
          body={`Proyecto realizado para Antel Tech Challenge 2025 - Desafío Accesa.

            Automatizamos un reporte SLA usando Python, Google Cloud (Vertex AI y Buckets) y desplegamos la app en la nube con Gunicorn.`}
          imageTechnology={[
            { src: '/portfolio/python.png', alt: 'Python', tooltip: 'Python' },
            { src: '/portfolio/VetexIA.png', alt: 'Vertex AI', tooltip: 'Vertex AI' },
            { src: '/portfolio/google-cloud.png', alt: 'Google Cloud', tooltip: 'Google Cloud' },
            { src: '/portfolio/html48.png', alt: 'HTML', tooltip: 'HTML' },
            { src: '/portfolio/bootstrap48.png', alt: 'Bootstrap', tooltip: 'Bootstrap' }
          ]}
          imageLeft={true}
          id="Antel"
        />
      </section>
      <section className="container p-0 text-white py-5 mb-5" id="section4">
        <h1 className="text-center tipografia tipografia_size1 mb-3">
          <strong>Tecnologias</strong>
        </h1>
        <div className="d-flex flex-column align-items-center gap-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <h3 className="tipografia text-center">Front-End</h3>
            <div className="d-flex flex-row gap-3 flex-wrap justify-content-center">
              <TechIcon src='/portfolio/react.png' alt='React' tooltip='React' />
              <TechIcon src='/portfolio/javascript.png' alt='JavaScript' tooltip='JavaScript' />
              <TechIcon src='/portfolio/typescript.png' alt='TypeScript' tooltip='TypeScript' />
              <TechIcon src='/portfolio/bootstrap.png' alt='Bootstrap' tooltip='Bootstrap' />
              <TechIcon src='/portfolio/html.png' alt='HTML' tooltip='HTML' />
              <TechIcon src='/portfolio/css.png' alt='CSS' tooltip='CSS' />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <h3 className="tipografia text-center">Back-End</h3>
            <div className="d-flex flex-row gap-3 flex-wrap justify-content-center">
              <TechIcon src='/portfolio/spring.png' alt='Spring' tooltip='Spring' />
              <TechIcon src='/portfolio/java.png' alt='Java' tooltip='Java' />
              <TechIcon src='/portfolio/csharp.png' alt='C#' tooltip='C#' />
              <TechIcon src='/portfolio/c++.png' alt='C++' tooltip='C++' />
              <TechIcon src='/portfolio/python.png' alt='Python' tooltip='Python' />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <h3 className="tipografia text-center">Bases de Datos</h3>
            <div className="d-flex flex-row gap-3 flex-wrap justify-content-center">
              <TechIcon src='/portfolio/sqlserver.png' alt='SQL Server' tooltip='SQL Server' />
              <TechIcon src='/portfolio/postgresql.png' alt='PostgreSQL' tooltip='PostgreSQL' />
              <TechIcon src='/portfolio/mysql.png' alt='MySQL' tooltip='MySQL' />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <h3 className="tipografia text-center">Nube</h3>
            <div className="d-flex flex-row gap-3 flex-wrap justify-content-center">
              <TechIcon src='/portfolio/google-cloud.png' alt='Google Cloud' tooltip='Google Cloud' />
            </div>
          </div>
          {/*<div className="d-flex flex-column align-items-center gap-3">
            <h2 className="tipografia text-center">Complementarias</h2>

          </div>*/}

        </div>
      </section>
           
      <section className="container p-0 text-white py-5" id="section5">
        <h1 className="text-center tipografia tipografia_size1">Contacto</h1>
        <ContactForm/>
  
      </section>
    </>
  );
}

export default App;

