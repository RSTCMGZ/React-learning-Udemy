import "../../components/Products/ProductItem.css";
import ProductInfo from "./ProductInfo";
const ProductItem = ({ product }) => {
  // const { product } = props; //props bu şekildede yazılabilinir.
  // const {imageUrl, productName, productPrice,} = product // böylede yazılır.
  const clickHandler = () => console.log("Sepete Eklendi!");

  // const date = new Date(2023, 2, 20);
  //!Saf JavaScript
  // const myButton = document.getElementById("myButton");
  // myButton.addEventListener("click", () => {
  //   console.log("Sepete eklendi");
  // });

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
        <span>{product.productPrice} TL</span> <br />
        {/* <button id="myButton" onClick={() => console.log("Sepete Eklendi!")}>
          Sepete Ekle
        </button> */}
        {/* <button onCanPlay={clickHandler}>Sepete Ekle</button> */}
        <button onCanPlay={clickHandler}>Güncelle</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
