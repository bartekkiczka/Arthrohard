import './characteristics.scss';
import { RefObject, useState } from 'react';

interface Props {
  characteristicsSectionRef: RefObject<HTMLDivElement>;
}

const Characteristics = ({ characteristicsSectionRef }: Props) => {
  const [hoveredElement, setHoveredElement] = useState(-1);

  return (
    <div className="characteristics" ref={characteristicsSectionRef}>
      <h3>Co wyróżnia nasz preparat</h3>
      <div className="characteristics__content">
        <div className="characteristics__content-element">
          <h4>Innowacyjny dodatek - Czarciego Pazura</h4>
          <div className="characteristics__content-element-content">
            <p>
              Zapewnia dodatkowe wsparcie w zwalczaniu stanów bólowych i
              zapalnych. Skoncentrowane składniki aktywne, opracowane we
              współpracy z lekarzami weterynarii, przynoszą szybkie i zauważalne
              efekty, szczególnie korzystne dla zwierząt z poważnymi problemami
              stawowymi.
            </p>
          </div>
          <div className="characteristics__content-element-picture">
            <img
              src="/characteristics/flower.svg"
              alt="flower"
              onMouseOver={() => setHoveredElement(1)}
            ></img>
            <img
              src="/characteristics/Vector1.svg"
              alt="vector"
              className="characteristics-vector characteristics-vector-1"
            />
            <img
              src="/characteristics/Vector2.svg"
              alt="vector"
              className="characteristics-vector characteristics-vector-2"
            />
          </div>
          {hoveredElement === 1 && (
            <div className="characteristics__content-element-underline"></div>
          )}
        </div>
        <div className="characteristics__content-element">
          <h4>
            Wygoda - <br /> dwa sposoby podawania
          </h4>
          <div className="characteristics__content-element-content">
            <div className="characteristics__content-element-point">
              <p>1</p>
              <p>Bezpośrednio do pyszczka</p>
            </div>
            <div className="characteristics__content-element-point">
              <p>2</p>
              <p>Zmieszany z karmą</p>
            </div>
          </div>
          <div className="characteristics__content-element-picture">
            <img
              src="/characteristics/dog.svg"
              alt="dogs"
              onMouseOver={() => setHoveredElement(2)}
            ></img>
            <img
              src="/characteristics/Vector3.svg"
              alt="vector"
              className="characteristics-vector characteristics-vector-3"
            />
          </div>
          {hoveredElement === 2 && (
            <div className="characteristics__content-element-underline"></div>
          )}
        </div>
        <div className="characteristics__content-element">
          <h4>Skuteczność - skoncentrowana dawka</h4>
          <div className="characteristics__content-element-content">
            <p>
              Tylko jedna porcja dziennie. To nie tylko wygoda, ale również
              gwarancja, że Twoje zwierzę otrzymuje wszystko, czego potrzebuje,
              aby cieszyć się zdrowiem i aktywnością na długo. Skorzystaj z
              zalet Arthrohard i zobacz różnicę w komforcie życia swojego
              zwierzęcia.
            </p>
          </div>
          <div className="characteristics__content-element-picture">
            <img
              src="/characteristics/syringe.svg"
              alt="dogs"
              onMouseOver={() => setHoveredElement(3)}
            ></img>
            <img
              src="/characteristics/Vector4.svg"
              alt="vector"
              className="characteristics-vector characteristics-vector-4"
            />
          </div>
          {hoveredElement === 3 && (
            <div className="characteristics__content-element-underline"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
