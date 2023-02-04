import product1 from '../../assets/product1.png'
import { HeartIcon, PlusIcon } from "../Icons/Icons";


const Product = ( {product} ) => {
  return (
    <div className="product">
      <div className="product__action">
        <HeartIcon />
      </div>

      <img src={product1} alt="sneakers" />

      <h3>Наименование продукта</h3>

      <div className="product__footer">
        <div className="price">
          <span className="gray">Цена: </span>
          <span className="value"> 12 999 руб.</span>
        </div>

        <button>
          <PlusIcon size={14} />
        </button>
      </div>
    </div>
  );
};

export default Product;
