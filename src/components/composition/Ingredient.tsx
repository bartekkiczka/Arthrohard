import { useState } from 'react';

interface Props {
  name: string;
  amount: number;
  description: string;
  index: number;
}

const Ingredient = ({ name, amount, description, index }: Props) => {
  const [hoveredName, setHoveredName] = useState<boolean>(false);

  return (
    <div className="composition__ingredient">
      <div className="composition__ingredient-picture"></div>
      <div
        className="composition__ingredient-name"
        onMouseOver={() => setHoveredName(true)}
        onMouseLeave={() => setHoveredName(false)}
      >
        <p> {name}</p>
        {hoveredName && <div></div>}
      </div>
      <p className="composition__ingredient-amount">{amount} mg</p>
      <p className="composition__ingredient-description">{description}</p>
    </div>
  );
};

export default Ingredient;
