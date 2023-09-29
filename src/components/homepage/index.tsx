import Characteristics from '../characteristics';
import Composition from '../composition';
import Header from '../header';
import Navbar from '../navbar';
import Products from '../products';
import { useRef, RefObject } from 'react';

const Homepage = () => {
  const characteristicsSectionRef: RefObject<HTMLDivElement> = useRef(null);
  const compositionSectionRef: RefObject<HTMLDivElement> = useRef(null);
  const productsSectionRef: RefObject<HTMLDivElement> = useRef(null);

  return (
    <div>
      <Navbar
        {...{
          characteristicsSectionRef,
          compositionSectionRef,
          productsSectionRef,
        }}
      />
      <Header />
      <Characteristics {...{ characteristicsSectionRef }} />
      <Composition {...{ compositionSectionRef }} />
      <Products {...{ productsSectionRef }} />
    </div>
  );
};

export default Homepage;
