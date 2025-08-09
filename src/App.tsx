import './App.css';
import { Nav, Card,SpecialText,TechIcon } from './components';
import image1 from '/foto.jpg';
//import {initialPositionArrow,finalPositionArrow} from './script.ts'
//import { useEffect, useState } from 'react';
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
      <br/>
      <section className="container py-5 text-white mb-2" id="section0" >
        <SpecialText text1="Hola! Soy " text2="Bryan Salamone."/>
        <div className="row g-0">
          <div className="col-md-4 me-5 d-flex align-items-center">
            <img src={image1} className="img-fluid img-mainPhoto" id="img1" alt="Imagen" />
          </div>
          
          <div className="col-md-6 ">
            <p className="text-start mt-5 tipografia">
              <span className='tipografia_size'style={{textDecoration:'underline',textDecorationColor:'gray'}}>Un Desarrollador que</span> <br/>
              <span className='tipografia_size1' style={{lineHeight:'0.9'}}>Cree que es bueno que el código no <span className='tipografia_color1 elipse'>funcione ...</span><br/></span>
              <span className='tipografia_size2'>Cada bug es otro café.</span>              
            </p>
          </div>
        </div>
      </section>
        
      <section className="container p-2  text-white py-5 mb-1" id="section1" >
        <h2 className="text-start tipografia tipografia_size1"><strong>Soy analista en computación.|</strong></h2>
        <p className="text-start tipografia tipografia_size">Actualmente trabajo como desarrollador Junior en 
          <a href='https://www.montevideocomm.uy' target='_blank' rel='noopener noreferrer'>
            <img src="/LogoMontevideoCOMM.jpg" className='img-thumbnail' alt="Logo"  style={{marginLeft:'6px',width:'27px' }} />
            <span>Montevideo COMM</span>
          </a>
          , </p>
        <br />
        <p className="text-start tipografia tipografia_size">
          Soy un desarrollador autodidacta que recién comienza en la industria, 
          pero con una fuerte pasión por crear soluciones digitales eficientes, usables y alineadas con 
          las necesidades tanto del usuario como del cliente. Me destaco por mi capacidad de aprendizaje 
          continuo y un enfoque práctico orientado a la resolución de problemas.
          </p>
      </section>

      <section className="container p-2 text-white py-5 mb-1" id="section2">
        <h1 className="text-start tipografia tipografia_size1"><strong>Experiencia Laboral</strong></h1>
        
        <div className="row g-3 mt-3">
          <div className="col-md-8">
            <div className="card" style={{background:'#15052c',borderRadius: '30px'}}>
              <div className="row g-0">
                <div className="col-md-5  d-flex pt-4 pe-5 pb-5 ps-5 ">
                  <img src="/gx17.png" className='img-fluid rounded-end ' alt="Logo"  style={{ backgroundColor: 'transparent',zIndex: 2 }}></img>
                </div>
                <div
                    style={{
                      position: 'absolute',
                      bottom: '40px',
                      left: '21%',
                      transform: 'translateX(-50%)',
                      width: '150px',
                      height: '50px',
                      backgroundColor: '#444',
                      borderRadius: '50%',
                      zIndex: 1,
                      opacity: 0.3
                    }}
                  />
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="text-start tipografia tipografia_size3 tipografia_color2"><strong>Desarrollador GeneXus</strong></h4>
                    <p className="text-start tipografia tipografia_size2 tipografia_color2">
                      Trabajo con GeneXus 17 y 9. Principalmente en un sistema CRM y de gestion comercial.
                    </p>
                    <div className="text-start">
                      <button className="btn tipografia_color2 tipografia"style={{
                        backgroundColor:'#2c1250',
                        border: '2px solid #4c2773',
                        fontWeight: 'bold',
                        borderRadius:'15px'
                      }}>LEER MAS</button>
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
      <h1 className="text-start tipografia tipografia_size1"><strong>Proyectos Personales</strong></h1>
        <Card 
          mainRoutes={[ { route: "/portfolio.PNG", type: "image" }]}
          title1="Proyecto Destacado"
          title2="Mi Portfolio"
          body="Este portafolio fue desarrollado con React, TypeScript, 
                CSS , HTML y Bootstrap.
                Cada sección tiene un objetivo específico: presentarme, mostrar mis proyectos, listar mis conocimientos y ofrecer una forma de contactarme fácilmente."
          imageTechnology={[
            { src: 'react48.png', alt: 'React', tooltip: 'React' },
            { src: 'typescript48.png', alt: 'TypeScript', tooltip: 'TypeScript' },
            { src: 'html48.png', alt: 'HTML', tooltip: 'HTML' },
            { src: 'css48.png', alt: 'CSS', tooltip: 'CSS' },
            { src: 'bootstrap48.png', alt: 'Bootstrap', tooltip: 'Bootstrap' }
          ]}
          imageLeft={false}
          id="Portfolio"
        />
        <Card 
          mainRoutes={[ { route: "/Antel1.PNG", type: "image" },{ route: "AntelChallenge2025.mp4", type: "video" }]}
          title1="Proyecto Destacado"
          title2="Antel Challenge"
          body={`Proyecto realizado para Antel Tech Challenge 2025 - Desafío Accesa.

            Automatizamos un reporte SLA usando Python, Google Cloud (Vertex AI y Buckets) y desplegamos la app en la nube con Gunicorn.`}
          imageTechnology={[
            { src: 'python.png', alt: 'Python', tooltip: 'Python' },
            { src: 'VetexIA.png', alt: 'Vertex AI', tooltip: 'Vertex AI' },
            { src: 'google-cloud.png', alt: 'Google Cloud', tooltip: 'Google Cloud' },
            { src: 'html48.png', alt: 'HTML', tooltip: 'HTML' },
            { src: 'bootstrap48.png', alt: 'Bootstrap', tooltip: 'Bootstrap' }
          ]}
          imageLeft={true}
          id="Antel"
        />
        
      </section>



      <section className="container p-0 text-white py-5 mb-5" id="section4">
      <h1 className="text-center tipografia tipografia_size1"><strong>Tecnologias</strong></h1>
        <div className="align-items-start">

          <h2 className='tipografia '>Front-End</h2>
            <TechIcon src='/react.png' alt='React' tooltip='React' />
            <TechIcon src='/javascript.png' alt='JavaScript' tooltip='JavaScript' />
            <TechIcon src='/typescript.png' alt='TypeScript' tooltip='TypeScript' />
            <TechIcon src='/bootstrap.png' alt='Bootstrap' tooltip='Bootstrap' />
            <TechIcon src='/html.png' alt='HTML' tooltip='HTML' />
            <TechIcon src='/css.png' alt='CSS' tooltip='CSS' />
          
          <h2 className='tipografia '>Back-End</h2>
          <div className="tech-icon-wrapper">
            <img src='/spring.png' className="img-thumbnail" alt="Spring"/>
            <span className="tooltip-text">Spring</span>
          </div>
          <div className="tech-icon-wrapper">
            <img src='/java.png' className="img-thumbnail" alt="Java"/>
            <span className="tooltip-text">Java</span>
          </div>
          <div className="tech-icon-wrapper">
            <img src='/csharp.png' className="img-thumbnail" alt="C#"/>
            <span className="tooltip-text">C#</span>
          </div>
          <div className="tech-icon-wrapper">
            <img src='/c++.png' className="img-thumbnail" alt="C++"/>
            <span className="tooltip-text">C++</span>
          </div>
          <div className="tech-icon-wrapper">
            <img src='/python.png' className="img-thumbnail" alt="Python"/>
            <span className="tooltip-text">Python</span>
          </div>
          <h2 className='tipografia '>Bases de Datos</h2>
          <div className="tech-icon-wrapper">
            <img src='/sqlserver.png' className="img-thumbnail" alt="SQL Server" />
            <span className="tooltip-text tipografia">SQL Server</span>
          </div>
          <div className="tech-icon-wrapper">
            <img src="postgresql.png" className="img-thumbnail" alt="PostgreSQL" />
            <span className="tooltip-text tipografia">PostgreSQL</span>
          </div>
          <div className="tech-icon-wrapper">
            <img src='/mysql.png' className="img-thumbnail" alt="MySQL" />
            <span className="tooltip-text tipografia">MySQL</span>
          </div>
          <h2 className='tipografia '>Nuble</h2>
            <div className="tech-icon-wrapper">
              <img src='/google-cloud.png' className="img-thumbnail" alt="PostgreSQL" />
              <span className="tooltip-text tipografia">Google Cloud</span>
            </div>
          <h2 className='tipografia '>Complementarias</h2>
        </div>
      </section>

      <section className="container p-0 text-white py-5" id="section5">
        <h1 className="text-center">Contacto</h1>

        <form className="mx-auto" style={{background:'#251840',borderRadius: '10px',padding: '20px', maxWidth: '500px'}}>
          <div className="mb-3" >
            <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
          </div>

          <div className="mb-3">
            <input type="tel" className="form-control" id="telefono" placeholder="Telefono" />
          </div>

          <div className="mb-3">
            <input type="email" className="form-control" id="email" placeholder="Correo" />
          </div>

          <div className="mb-3">
            <textarea className="form-control" id="mensaje" rows={4} placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-20">Enviar</button>

        </form>
      </section>
    </>
  );
}

export default App;

