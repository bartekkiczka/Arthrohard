import './navbar.scss';
import Navigator from './Navigator';
import { RefObject } from 'react';

interface Props {
  characteristicsSectionRef: RefObject<HTMLDivElement>;
  compositionSectionRef: RefObject<HTMLDivElement>;
  productsSectionRef: RefObject<HTMLDivElement>;
}

const Navbar = ({
  characteristicsSectionRef,
  compositionSectionRef,
  productsSectionRef,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__content-logo">
          <p>ARTHRO</p>
          <p>HARD</p>
        </div>
        <Navigator
          {...{
            characteristicsSectionRef,
            compositionSectionRef,
            productsSectionRef,
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
