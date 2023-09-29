import { useState } from 'react';
import { Product } from '../../types/Product';
import ProductTilePopup from './ProductTilePopup';

interface Props {
  product: Product;
  index: number;
}

const ProductTile = ({ product, index }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="products__tile" onClick={() => setShowPopup(true)}>
        ID: {product.id}
      </div>
      {showPopup && <ProductTilePopup {...{ product, setShowPopup }} />}
    </>
  );
};

export default ProductTile;
