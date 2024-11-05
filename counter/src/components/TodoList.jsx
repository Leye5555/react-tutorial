import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  // state variables
  const [title, setTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);

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
    setContent(event.target.value);
  };

  const updateTodos = (prevTodos) => {
    return [...prevTodos, { id: prevTodos.length + 1, title, content }];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //
    setTodos(updateTodos);
    setTitle("");
    setContent("");
    setIsEdit(false);
  };

  const editTodo = (id) => {
    setIsEdit(true);
    const filteredTodo = todos.filter((item) => item.id === id);
    const todo = filteredTodo[0];
    setTitle(todo.title);
    setContent(todo.content);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <div className="todo-layout">
        <ul type="none">
          {todos.length > 0
            ? todos.map((item, index) => {
                return (
                  <li
                    onClick={() => editTodo(item.id)}
                    key={item.id ? item.id : index + 1}
                  >
                    {item?.title}
                  </li>
                );
              })
            : null}
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
            value={content}
            rows={10}
            cols={10}
          ></textarea>
          <button type="submit">{isEdit ? "Save Changes" : "Add to do"}</button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
