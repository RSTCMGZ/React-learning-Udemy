import { useState } from "react";
import "../../components/Products/ProductItem.css";
import ProductInfo from "./ProductInfo";
import Counter from "./Counter";
const ProductItem = ({ product, SetProducts, products }) => {
  // const { product } = props; //props bu şekildede yazılabilinir.
  const { imageUrl, productName, productPrice } = product; // böylede yazılır.
  // let title = productName;
  //! useState Kullanımı
  const [title, setTitle] = useState(productName);
  const [count, SetCount] = useState(productPrice);

  const clickHandler = () => {
    setTitle("Güncellendi!");
  };
  const click = () => {
    setTitle(productName);
  };
  const deleteHandler = () => {
    SetProducts(products.filter((item) => item.id !== product.id));
  };

  // const clickHandler = () => console.log("Sepete Eklendi!");

  // const date = new Date(2023, 2, 20);
  //!Saf JavaScript
  // const myButton = document.getElementById("myButton");
  // myButton.addEventListener("click", () => {
  //   console.log("Sepete eklendi");
  // });
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <br />
        {/* <span>{date.toISOString()}</span> */}
      </div>
      <ProductInfo>
        <h2>{title}</h2>
        {/* <span>{productPrice} TL</span> */}
        <Counter productPrice={productPrice} count={count} SetCount={SetCount}>
          <span>{count} ₺</span>
        </Counter>

        <br />

        {/* <button id="myButton" onClick={() => console.log("Sepete Eklendi!")}>
          Sepete Ekle
        </button> */}
        {/* <button onCanPlay={clickHandler}>Sepete Ekle</button> */}
        <div className="product-buttons ">
          <button onClick={clickHandler}>Güncelle</button>
          <button onClick={click}>Geri al</button>
          <button className="btn-delete" onClick={deleteHandler}>
            Sil
          </button>
        </div>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
