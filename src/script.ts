export function initialPositionArrow(id:string) : {x:number;y:number}|null{

    const title=document.getElementById(id);
    const svg = document.getElementById("svgId") as unknown as SVGSVGElement;
    if (title && svg){
  
      const rect=title?.getBoundingClientRect();
      const point = svg.createSVGPoint();
      point.x = rect.left;
      point.y = rect.bottom;
      const ctm = svg.getScreenCTM(); 
      if (!ctm) return null;
      const svgPoint = point.matrixTransform(ctm.inverse()); 
      return { x: svgPoint.x, y: svgPoint.y };
    }else{
      return null;
    }
}
export function finalPositionArrow(id:string) : {x:number;y:number}|null{

    const title=document.getElementById(id);
    const svg = document.getElementById("svgId") as unknown as SVGSVGElement;
    if (title && svg){
  
      const rect=title?.getBoundingClientRect();
      const point = svg.createSVGPoint();
      point.x = rect.left+ rect.width / 2;
      point.y = rect.top;
      const ctm = svg.getScreenCTM(); 
      if (!ctm) return null;
      const svgPoint = point.matrixTransform(ctm.inverse()); 
      return { x: svgPoint.x, y: svgPoint.y };
    }else{
      return null;
    }
}