import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  // state variables
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  //   const [formData, setFormData] = useState({
  //     title: "",
  //     content: "",
  //     email: "",
  //     phone: "",
  //   });

  // functions
  //   const handleChange = (event) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [event.target.name]: event.target.value,
  //     }));
  //   };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, text });
  };

  return (
    <div>
      <h1>My Todos</h1>
      <div className="todo-layout">
        <ul type="none">
          <li>lorem10</li>
          <li>lorem10</li>
          <li>lorem10</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
            placeholder="title"
          />
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
          <textarea
            onChange={handleTextChange}
            name="content"
            id=""
            value={text}
            rows={10}
            cols={10}
          ></textarea>
          <button type="submit">Add to do</button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
