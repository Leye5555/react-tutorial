// import React from "react";
import "./App.css";

function App() {
  // React.useState("red");

  function changeColor(event) {
    event.target.classList.add("myApp--active");
  }

  function changeColorOut(event) {
    event.target.classList.remove("myApp--active");
  }
  const test = "I am a developer";
  return (
    <div
      className="myApp"
      onMouseOver={changeColor}
      onMouseOut={changeColorOut}
    >
      Hello World! {test}
    </div>
  );
}

export default App;
