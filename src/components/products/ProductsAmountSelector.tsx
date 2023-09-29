interface Props {
  pageSize: number;
  setPageSize: (e: number) => void;
}

const ProductsAmountSelector = ({ pageSize, setPageSize }: Props) => {
  return (
    <div className="products__amount">
      <p>Liczba produktów na stronie</p>
      <div>
        <select onChange={(event) => setPageSize(parseInt(event.target.value))}>
          <option value={24}>24</option>
          <option value={48}>48</option>
          <option value={72}>72</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsAmountSelector;
