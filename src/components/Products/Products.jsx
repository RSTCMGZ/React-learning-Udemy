import "../../components/Products/Products.css";
import ProductItem from "./ProductItem";
import { productData } from "../../productData";
// import ToggleBackground from "./ToggleBackground";
//! sahte veri tabanı oluşturduk.

const Products = () => {
  // const imageUrl =
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNvla5p3z0IUK4ED-I_Y3DyCP5h-MJkLxew&usqp=CAU";
  // const productName = "Bal";
  // const productPrice = 10;
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products ">
        {/* //!ikinci yol */}
        {/* {productData.map((product) => {
          return <ProductItem key={product.productName} product={product} />;
        })} */}
        {productData.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}

        {/* <ProductItem imageUrl={imageUrl} productName="Süt" productPrice="45" /> */}
        {/* <ToggleBackground /> */}
      </div>
    </div>
  );
};

export default Products;
