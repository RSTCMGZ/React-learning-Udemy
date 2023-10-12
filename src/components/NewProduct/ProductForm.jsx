import React from "react";
import "./ProductForm.css";

function ProductForm() {
  const titleChangeHandler = (event) => {
    event.target.value;
  };

  return (
    <form className="product-form">
      <div className="product-form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz..."
          onChange={titleChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı</label>
        <input type="number" placeholder="Ürün Fiyatı Giriniz..." />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli</label>
        <input type="text" placeholder="Ürün Görseli Giriniz..." />
      </div>
      <button className="product-form-button" type="button">
        Ürün Ekle
      </button>
    </form>
  );
}

export default ProductForm;
