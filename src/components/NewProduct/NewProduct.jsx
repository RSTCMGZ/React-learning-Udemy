import ProductForm from "./ProductForm";

import React from "react";

export const NewProduct = ({ SetProducts }) => {
  const onSaveProduct = (newProductData) => {
    SetProducts((prevState) => [...prevState, newProductData]);
  };
  return (
    <div className="new-product-wrapper">
      {/* <ProductForm SetProducts={props.SetProducts} /> */}
      <ProductForm onSaveProduct={onSaveProduct} />
    </div>
  );
};

export default NewProduct;
