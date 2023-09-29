import './App.css';

function MyComponent(){
return(
  <div>
    Hello World!
  </div>
)
}



function App() {
  // const paragraph = document.createElement("p")
  // paragraph.textContent = "Hello World!"
  // document.getElementById("root").append(paragraph)
  return (
    <div>
      <p>Hello World!</p>
    <MyComponent/>

    </div>
  );
}

export default App;
