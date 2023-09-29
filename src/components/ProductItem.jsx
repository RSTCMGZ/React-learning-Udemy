import "../components/ProductItem.css";
function ProductItem() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNvla5p3z0IUK4ED-I_Y3DyCP5h-MJkLxew&usqp=CAU";
  const productTitle = "Bal";
  const productPrice = 10;
  const date = new Date(2023, 2, 20);
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">
        <h2>{productTitle}</h2>
        <span>{productPrice} TL</span> <br />
        <span>{date.toISOString()}</span>
      </div>
    </div>
  );
}

export default ProductItem;
