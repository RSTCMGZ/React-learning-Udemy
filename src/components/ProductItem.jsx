import "../components/ProductItem.css";
function ProductItem({ product }) {
  // const { product } = props; //props bu şekildede yazılabilinir.
  // const {imageUrl, productName, productPrice,} = product // böylede yazılır.

  // const date = new Date(2023, 2, 20);
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="product-info">
        <h2>{product.productName}</h2>
        <span>{product.productPrice} TL</span> <br />
        {/* <span>{date.toISOString()}</span> */}
      </div>
    </div>
  );
}

export default ProductItem;
