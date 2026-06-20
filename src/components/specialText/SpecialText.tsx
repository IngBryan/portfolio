type Props = {
  text1: string;
  text2: string;
};

import { useState, useEffect, useRef } from 'react';

export const SpecialText = ({ text1, text2 }: Props) => {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const interval1Ref = useRef<ReturnType<typeof setInterval> | null>(null);
  const interval2Ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;

    const clearAll = () => {
      if (interval1Ref.current) clearInterval(interval1Ref.current);
      if (interval2Ref.current) clearInterval(interval2Ref.current);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedText1(text1);
      setDisplayedText2(text2);
      setIsComplete(true);
      return;
    }

    setDisplayedText1('');
    setDisplayedText2('');
    setIsComplete(false);

    interval1Ref.current = setInterval(() => {
      index1++;
      setDisplayedText1(text1.slice(0, index1));

      if (index1 === text1.length) {
        if (interval1Ref.current) clearInterval(interval1Ref.current);

        interval2Ref.current = setInterval(() => {
          index2++;
          setDisplayedText2(text2.slice(0, index2));

          if (index2 === text2.length) {
            if (interval2Ref.current) clearInterval(interval2Ref.current);
            setIsComplete(true);
          }
        }, 120);
      }
    }, 120);

    return () => clearAll();
  }, [text1, text2]);

  return (
    <p className="special-text text-start" aria-live="polite">
      {displayedText1}
      <span className="special-text__accent">{displayedText2}</span>
      <span
        className={`special-text__cursor ${isComplete ? 'special-text__cursor--hidden' : ''}`}
        aria-hidden="true"
      />
    </p>
  );
};
