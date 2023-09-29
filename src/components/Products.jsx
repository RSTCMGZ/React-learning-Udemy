import "../components/Products.css";
import ProductItem from "./ProductItem";
function Products() {
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products">
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default Products;
