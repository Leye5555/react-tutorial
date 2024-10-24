// import React from "react";
import "./App.css";
// import CheckLateness from "./test"; // default
//import { checkLateness } from "./test"; // named import
import * as Utils from "./test"; // named import but renamed

function App() {
  // React.useState("red");

  // function changeColor(event) {
  //   event.target.classList.add("myApp--active");
  // }

  const changeColor = (event) => {
    event.target.classList.add("myApp--active");
  };

  function showAge() {
    let age = 2;
    console.log(this);
    console.log(age);
  }
  showAge();

  const showName = () => {
    let name = "";
    console.log(this);
    console.log(name);
  };

  showName();

  const oops = Utils.checkLateness("2024-10-24T17:00:00Z");
  console.log({ oops });
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
