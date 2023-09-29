import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content-left">
          <img src="/header/product.svg" alt="product"></img>
        </div>
        <div className="header__content-right">
          <div className="header__content-right-heading">
            <h1>ARTHRO</h1>
            <h1>HARD</h1>
          </div>
          <h2>Lab-V Arthrohard Preparat</h2>
          <h2>na wsparcie stawów dla psa i kota</h2>
          <p>
            Arthrohard to dobrze przyswajalny suplement diety w formie syropu,
            <br />
            stworzony z myślą o zdrowiu stawów Twojego psa lub kota.
          </p>
          <button>Kup teraz</button>
        </div>
      </div>
      <img
        src="/header/Vector1.svg"
        alt="vector"
        className="header-vector header-vector-1"
      />
      <img
        src="/header/Vector2.svg"
        alt="vector"
        className="header-vector header-vector-2"
      />
    </div>
  );
};

export default Header;
