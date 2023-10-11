import React, { useState } from "react";

function Counter(props) {
  const [count, SetCount] = useState(props.productPrice);
  return (
    <div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => SetCount(count + 1)}>Çoğalt</button>
      <button onClick={() => SetCount(count - 1)}>Azalt</button> */}
      <button onClick={() => props.SetCount(props.count - 1)}>-</button>
      {props.children}
      {/* <span>{count} ₺</span> */}
      <button onClick={() => props.SetCount(props.count + 1)}>+</button>
    </div>
  );
}

export default Counter;
