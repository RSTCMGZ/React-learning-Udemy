import AddProduct from "./AddProduct";
import ProductForm from "./ProductForm";
import React, { useState } from "react";

const NewProduct = ({ products, SetProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onSaveProduct = (newProductData) => {
    SetProducts((prevState) => [...prevState, newProductData]);
  };
  return (
    <div className="new-product-wrapper">
      {isOpen ? (
        <ProductForm
          setIsOpen={setIsOpen}
          onSaveProduct={onSaveProduct}
          products={products}
        />
      ) : (
        <AddProduct setIsOpen={setIsOpen} />
      )}
      {/* <ProductForm SetProducts={props.SetProducts} /> */}
    </div>
  );
};

export default NewProduct;
