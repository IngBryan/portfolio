import { ReactNode } from "react";

interface Props{
    name:string,
    children: ReactNode,
    
}


export const InputLi = ({name,children}:Props) =>{

    return(
        <li className={name}style={{marginRight: '60px'}}>
            {children}
        </li>
    )
}