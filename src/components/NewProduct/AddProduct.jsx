import React from "react";

function AddProduct({ setIsOpen }) {
  return (
    <div>
      <button onClick={setIsOpen}>Yeni Ürün Ekle</button>
    </div>
  );
}

export default AddProduct;
