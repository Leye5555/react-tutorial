import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  // state variables
  const [title, setTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState("");
  const [todoId, setTodoId] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedToDos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
    return storedToDos;
  });

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setContent(event.target.value);
  };

  const updateTodos = (prevTodos) => {
    if (!todoId) {
      const temporaryTodos = [
        ...prevTodos,
        { id: prevTodos.length + 1, title, content },
      ];
      localStorage.setItem("todos", JSON.stringify(temporaryTodos));
      return temporaryTodos;
    }
    let editedTodos = prevTodos.map((item) => {
      if (item.id === todoId) {
        return { ...item, title, content };
      }
      return item;
    });
    localStorage.setItem("todos", JSON.stringify(editedTodos));
    return editedTodos;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //
    if (title === "" || content === "") return;
    setTodos(updateTodos);

    setTitle("");
    setContent("");
    setTodoId("");
    setIsEdit(false);

    console.log(todos);
  };

  const editTodo = (id) => {
    setIsEdit(true);
    const filteredTodo = todos.filter((item) => item.id === id);
    const todo = filteredTodo[0];
    setTodoId(id);
    setTitle(todo.title);
    setContent(todo.content);
  };

  const deleteTodo = (id) => {
    setTitle("");
    setContent("");
    setTodoId("");
    setTodos((prev) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(prev.filter((item) => item.id !== id))
      );
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div>
      <h1>My Todos</h1>
      <div className="todo-layout">
        <ul type="none">
          {todos.length > 0
            ? todos.map((item, index) => {
                return (
                  <li key={item.id ? item.id : index + 1}>
                    <span tabIndex={0} onClick={() => editTodo(item.id)}>
                      {item?.title}
                    </span>{" "}
                    <button type="button" onClick={() => deleteTodo(item.id)}>
                      Delete
                    </button>
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
