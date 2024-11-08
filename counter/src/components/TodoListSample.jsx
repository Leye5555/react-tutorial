import { useState } from "react";
import "./TodoList.css";

const TodoListSample = () => {
  let text = "text";
  console.log(text);
  const [word, setWord] = useState("word 1");

  const changeText = () => {
    text = "Changed text";
    setWord("word 1 changed");
    console.log(text, word);
  };
  return (
    <div>
      <h1>My Todos</h1>
      <div className="todo-layout">
        <ul type="none">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <form>
          {text} {/* won't change */}
          <br />
          {word} {/* will change */}
          <input type="text" name="title" placeholder="title" />
          {/* <input
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
          <input
            type="tel"
            value={formData.phone}
            name="phone"
            onChange={handleChange}
            placeholder="phone no"
          /> */}
          <textarea name="content" id="" rows={10} cols={10}></textarea>
          <button type="button" onClick={() => changeText()}>
            Add to do
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoListSample;
