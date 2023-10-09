import React, { useState } from "react";

const ToggleBackground = () => {
  const [isBlack, setIsBlack] = useState(false);

  const handleClick = () => {
    setIsBlack(!isBlack);
    const body = document.querySelector("body");
    body.style.backgroundColor = isBlack ? "white" : "black";
    body.style.color = isBlack ? "black" : "white";
  };

  return (
    <div onClick={handleClick}>
      <button onClick={handleClick}>Arka Planı Değiştir</button>
    </div>
  );
};

export default ToggleBackground;
