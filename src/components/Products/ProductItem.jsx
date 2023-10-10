import "../../components/Products/ProductItem.css";
import ProductInfo from "./ProductInfo";
const ProductItem = ({ product }) => {
  // const { product } = props; //props bu şekildede yazılabilinir.
  // const {imageUrl, productName, productPrice,} = product // böylede yazılır.

  // const date = new Date(2023, 2, 20);
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={product.imageUrl} alt="" />
      </div>
      <div>
        <br />
        {/* <span>{date.toISOString()}</span> */}
      </div>
      <ProductInfo>
        <h2>{product.productName}</h2>
        <span>{product.productPrice} TL</span>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
