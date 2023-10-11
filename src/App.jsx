import "./App.css";
import Products from "./components/Products/Products.jsx";
import Counter from "./components/Products/Counter";
import { useState } from "react";

const App = () => {
  const [count, SetCount] = useState(0);

  return (
    <div className="App">
      <Products />
      <Counter count={count} SetCount={SetCount} ProductPrice={count}>
        {count}
      </Counter>
    </div>
  );
};

export default App;
