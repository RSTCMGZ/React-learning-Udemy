import React from "react";
import "./ProductForm.css";
import { useState } from "react";

function ProductForm(props) {
  const [productName, SetProductName] = useState("");
  const [productPrice, SetProductPrice] = useState("");
  const [imageUrl, SetImageUrl] = useState("");

  //! Farklı yöntemi
  //   const [productData, SetProductData] = useState({
  //     productName: "",
  //     productPrice: 0,
  //     imageUrl: "",
  //   });
  const titleChangeHandler = (event) => {
    SetProductName(event.target.value);
    // SetProductData({
    //   ...productData,
    //   productName: event.target.value,
    // });
    //!farklı yöntem
    // SetProductData((prevState) => {
    //   return { ...prevState, productName: event.target.value };
    // });
  };
  const priceChangeHandler = (event) => {
    SetProductPrice(event.target.value);
    // SetProductData({
    //   ...productData,
    //   productPrice: event.target.value,
    // });
    //!farklı yöntem
    // SetProductData((prevState) => {
    //   return { ...prevState, productPrice: event.target.value };
    // });
  };
  const imageChangeHandler = (event) => {
    SetImageUrl(event.target.value);
    // SetProductData({
    //   ...productData,
    //   imageUrl: event.target.value,
    // });
    //!farklı yöntem
    // SetProductData((prevState) => {
    //   return { ...prevState, imageUrl: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = {
      id: props.products.length + 1,
      productName,
      productPrice,
      imageUrl,
    };

    // props.SetProducts((preveState) => [...preveState, newProductData]);
    props.onSaveProduct(newProductData);
    SetProductName("");
    SetProductPrice("");
    SetImageUrl("");
  };
  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz..."
          onChange={titleChangeHandler}
          value={productName}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı₺</label>
        <input
          type="number"
          placeholder="Ürün Fiyatı Giriniz..."
          onChange={priceChangeHandler}
          value={productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli </label>
        <input
          type="text"
          placeholder="Ürün Görseli Giriniz..."
          onChange={imageChangeHandler}
          value={imageUrl}
        />
      </div>
      <button className="product-form-button">Ürün Ekle</button>
    </form>
  );
}

export default ProductForm;
