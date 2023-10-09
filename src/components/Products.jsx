import "../components/Products.css";
import ProductItem from "./ProductItem";
// import ToggleBackground from "./ToggleBackground";
function Products() {
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products ">
        <ProductItem />
        <ProductItem />
        {/* <ToggleBackground /> */}
      </div>
    </div>
  );
}

export default Products;
