// import React from "react";
import "./App.css";

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
