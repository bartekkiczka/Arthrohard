import { useState, useEffect, RefObject } from 'react';
import { getProducts } from '../../api/products';
import { useInView } from 'react-intersection-observer';
import { Product } from '../../types/Product';
import './products.scss';
import ProductTile from './ProductTile';
import ProductsAmountSelector from './ProductsAmountSelector';
import useWindowWidth from '../../hooks/useWindowsWidth';

interface Props {
  productsSectionRef: RefObject<HTMLDivElement>;
}

const Products = ({ productsSectionRef }: Props) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(24);
  const [ref, inView] = useInView();
  const windowWidth = useWindowWidth();
  let step = 8;

  useEffect(() => {
    if (windowWidth <= 768) {
      step = 4;
    } else {
      step = 8;
    }

    if (visibleProducts > pageSize) setVisibleProducts(pageSize);

    if (inView) {
      console.log(step);
      if (visibleProducts < pageSize)
        setVisibleProducts(visibleProducts + step);

      getProducts(pageNumber, pageSize).then((response) => {
        if (response && response.status === 200) {
          setProducts(response.data.data);
        }
      });
    }
  }, [inView, pageNumber, pageSize]);

  return (
    <div className="products" ref={productsSectionRef}>
      <ProductsAmountSelector {...{ pageSize, setPageSize }} />
      <div className="products__content">
        <div className="products__content-tiles">
          {products
            .slice(0, visibleProducts)
            .map((product: Product, index: number) => {
              return <ProductTile {...{ product, index }} key={index} />;
            })}
        </div>
      </div>
      <div ref={ref}>.</div>
    </div>
  );
};

export default Products;
