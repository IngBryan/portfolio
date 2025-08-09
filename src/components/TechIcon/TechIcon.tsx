export interface TechIconProps {
    src: string;
    alt: string;
    tooltip: string;
  }

export const TechIcon=(t:TechIconProps)=>{
    return (
        <div className="tech-icon-wrapper">
          <img src={t.src} className="img-thumbnail" alt={t.alt} />
          <span className="tooltip-text">{t.tooltip}</span>
        </div>
    );
};