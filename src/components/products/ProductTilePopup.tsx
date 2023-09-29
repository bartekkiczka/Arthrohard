import { Product } from '../../types/Product';

interface Props {
  product: Product;
  setShowPopup: (v: boolean) => void;
}

const ProductTilePopup = ({ product, setShowPopup }: Props) => {
  return (
    <div className="products__tile-popup">
      <div className="products__tile-popup-content">
        <p>ID: {product.id}</p>
        <p>Nazwa: {product.name}</p>
        <p>Wartość: {product.name}</p>
        <div
          className="products__tile-popup-cross"
          onClick={() => setShowPopup(false)}
        ></div>
      </div>
    </div>
  );
};

export default ProductTilePopup;
