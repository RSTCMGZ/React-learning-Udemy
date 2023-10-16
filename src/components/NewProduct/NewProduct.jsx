import ProductForm from "./ProductForm";

import React from "react";

export const NewProduct = ({ products, SetProducts }) => {
  const onSaveProduct = (newProductData) => {
    SetProducts((prevState) => [...prevState, newProductData]);
  };
  return (
    <div className="new-product-wrapper">
      {/* <ProductForm SetProducts={props.SetProducts} /> */}
      <ProductForm onSaveProduct={onSaveProduct} products={products} />
    </div>
  );
};

export default NewProduct;
