import { CompositionData } from '../../types/CompositionData';
import Ingredient from './Ingredient';
import './composition.scss';
import { RefObject } from 'react';
import { compositionData as data } from './compositionData';

interface Props {
  compositionSectionRef: RefObject<HTMLDivElement>;
}

const Composition = ({ compositionSectionRef }: Props) => {
  return (
    <div className="composition" ref={compositionSectionRef}>
      <h3>Skład w 5 ml</h3>
      <p className="composition-heading">Co dają poszczególne składniki:</p>
      <div className="composition__content">
        <div className="composition__content-right">
          {data.slice(0, 3).map((e: CompositionData, index: number) => {
            return <Ingredient {...{ ...e, index }} key={index} />;
          })}
        </div>
        <div className="composition__content-mid">
          <img src="/composition/product.svg" alt="product"></img>
          <img
            src="/composition/Vector-1.svg"
            alt="product"
            className="composition__content-mid-vector1"
          ></img>
          <img
            src="/composition/Vector.svg"
            alt="product "
            className="composition__content-mid-vector2"
          ></img>
          <button>Kup teraz</button>
        </div>
        <div className="composition__content-left">
          {data.slice(3, 6).map((e: CompositionData, index: number) => {
            return <Ingredient {...{ ...e, index }} key={index} />;
          })}
        </div>
      </div>
      <div className="composition__dog">
        <img src="/composition/dog.svg" alt="dog"></img>
        <img
          src="/composition/Vector-3.svg"
          alt="product"
          className="composition__dog-vector3"
        ></img>
        <img
          src="/composition/Vector-4.svg"
          alt="product "
          className="composition__dog-vector4"
        ></img>
      </div>
    </div>
  );
};

export default Composition;
