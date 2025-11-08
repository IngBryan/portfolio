type Props = {
    text1: string;
    text2: string;
  };
import { useState,useEffect,useRef } from "react"

export const SpecialText=({text1,text2}:Props)=>{
    
    const [displayedText1, setDisplayedText1] = useState('');
    const [displayedText2, setDisplayedText2] = useState('');
    const interval1Ref = useRef<ReturnType<typeof setInterval> | null>(null);
    const interval2Ref = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(()=>{
        let index1 = 0;
        let index2 = 0;
        const clearAll = () => {
            if (interval1Ref.current) clearInterval(interval1Ref.current);
            if (interval2Ref.current) clearInterval(interval2Ref.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          };
        const startTyping = () => {
            clearAll();
            setDisplayedText1(text1.charAt(0));
            setDisplayedText2('');
            index1 = 0;
            index2 = 0;
            interval1Ref.current = setInterval(() => {
                setDisplayedText1(text1.slice(0, index1 + 1));
                index1++;
                if (index1 === text1.length){
                    interval2Ref.current=setInterval(() => {
                        setDisplayedText2(text2.slice(0, index2+ 1));
                        index2++;
                        if (index2===text2.length){
                            setTimeout(() => {
                                startTyping();
                            }, 1000);
                        }
                    }, 120);
                }
                    
            }, 120);
        };
        startTyping();
        return () => {
            clearAll();
        }

    },[text1,text2]);

    return <p className="text-start fw-bold tipografia tipografia_size"style={{height:'20px'}}>
                {displayedText1}
                <span className="tipografia_color1">{displayedText2}</span>
            </p>;
}