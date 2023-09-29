import { useState, RefObject, useEffect, useCallback, useMemo } from 'react';

interface Props {
  characteristicsSectionRef: RefObject<HTMLDivElement>;
  compositionSectionRef: RefObject<HTMLDivElement>;
  productsSectionRef: RefObject<HTMLDivElement>;
}

const Navigator = ({
  characteristicsSectionRef,
  compositionSectionRef,
  productsSectionRef,
}: Props) => {
  const [currentSection, setCurrentSection] = useState<number>(-1);
  const options = useMemo(
    () => [
      {
        name: 'CO NAS WYRÓŻNIA',
        ref: characteristicsSectionRef,
      },
      {
        name: 'SKŁAD',
        ref: compositionSectionRef,
      },
      {
        name: 'PRODUKTY',
        ref: productsSectionRef,
      },
    ],
    [characteristicsSectionRef, compositionSectionRef, productsSectionRef]
  );

  const scrollToRef = (index: number) => {
    let currentRef = options[index].ref.current;
    currentRef?.scrollIntoView({ behavior: 'smooth' });
  };

  const checkRefs = useCallback(() => {
    for (let i in options) {
      console.log(i);
      let currentRef = options[i].ref.current;
      if (!currentRef) return;
      let topOffset = currentRef.offsetTop;
      let bottomOffset = currentRef.offsetTop + currentRef.offsetHeight;
      if (
        window.pageYOffset >= topOffset &&
        window.pageYOffset <= bottomOffset
      ) {
        setCurrentSection(parseInt(i));
      }
    }
  }, [options]);

  useEffect(() => {
    checkRefs();

    window.addEventListener('scroll', checkRefs);

    return () => {
      window.removeEventListener('scroll', checkRefs);
    };
  }, [checkRefs]);

  return (
    <div className="navbar__navigator">
      {options.map((e: any, index: number) => {
        return (
          <div className="navbar__navigator-element" key={index}>
            <p
              key={index}
              className={currentSection === index ? 'element-selected' : ''}
              onClick={() => scrollToRef(index)}
            >
              {e.name}
            </p>
            <div
              className={`navbar__navigator-element-underline${
                currentSection === index
                  ? ' navbar__navigator-element-underline-hovered'
                  : ''
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Navigator;
