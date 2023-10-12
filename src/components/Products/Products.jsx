import "../../components/Products/Products.css";
import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";
// import ToggleBackground from "./ToggleBackground";
//! sahte veri tabanı oluşturduk.

const Products = () => {
  // const imageUrl =
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNvla5p3z0IUK4ED-I_Y3DyCP5h-MJkLxew&usqp=CAU";
  // const productName = "Bal";
  // const productPrice = 10;
  const [products, SetProducts] = useState(productData);

  return (
    <div className="product-wrapper">
      <NewProduct SetProducts={SetProducts} />
      <h1>Products</h1>
      <div className="products ">
        {/* //!ikinci yol */}
        {/* {productData.map((product) => {
          return <ProductItem key={product.productName} product={product} />;
        })} */}
        {products.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}

        {/* <ProductItem imageUrl={imageUrl} productName="Süt" productPrice="45" /> */}
        {/* <ToggleBackground /> */}
      </div>
    </div>
  );
};

export default Products;
