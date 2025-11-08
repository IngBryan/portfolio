import { Carousel } from "./components";
import { TechIcon,TechIconProps } from '../TechIcon/TechIcon';
export interface Data {
    route: string;
    type: 'image' | 'video';
  }

interface props{
    mainRoutes:Data[];
    title1:string;
    title2:string;
    body:string;
    imageTechnology:TechIconProps[];
    imageLeft:boolean;
    id:string;
}
export const Card =(p: props)=>{
    return(
        <div className="card mt-3" style={{ background:'#120926'}}>
            <div className={`row g-0 ${p.imageLeft ? 'flex-column-reverse flex-md-row' : 'flex-column flex-md-row'}`}>
            {p.imageLeft && (
                <div className="col-md-4 me-2 d-flex align-items-center position-relative">
                    <img 
                    src='./Gradient-3.png' 
                    alt="fondo degradado"
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: 'cover', zIndex: 0 }}
                    />
                    <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                        <Carousel id={p.id} items={p.mainRoutes}/>
                    </div>
                </div>
                )}
                
                <div className={`col-md-7 d-flex align-items-center ${!p.imageLeft ? 'me-0 me-sm-5' : 'ms-0 ms-sm-5'}`}>
                    <div className="card-body p-0 ">
                        <p className='text-start tipografia tipografia_color3' style={{ marginBottom: '0.2rem'}}>
                            {p.title1}
                        </p>
                        <h1 className="text-start tipografia tipografia_color2 tipografia_size6" style={{ marginTop: '0.2rem' }}>
                            {p.title2}
                        </h1>
                        <p className="text-start tipografia tipografia_color2 p-3 "style={{background:'#251840',borderRadius: '10px',padding:'5px',whiteSpace:'pre-line'}}>
                            {p.body}
                        </p>
                    </div>
                </div>
                {!p.imageLeft && (
                    <div className="col-md-4 ms-2 d-flex align-items-center position-relative" style={{ overflow: 'hidden' }}>
                        <img 
                            src='./Gradient-3.png' 
                            alt="fondo degradado"
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{ objectFit: 'cover', zIndex: 0 }}
                        />
                        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                        <Carousel id={p.id} items={p.mainRoutes} />
                        </div>
                    </div>
                )}               
            </div>
            <div className='row align-items-center mt-3'>
                <div className="col-12 d-flex justify-content-center gap-3 flex-wrap">
                    {p.imageTechnology.map((item, index) => {
                    return (
                        <TechIcon key={index} src={item.src} alt={item.alt} tooltip={item.tooltip} />
                    );
                    })}
                </div>
            </div>
        </div>

    )
}