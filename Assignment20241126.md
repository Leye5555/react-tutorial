### **React Assignment: To-Do List with Theme Toggle and Persistent Data**

#### **Project Description:**

Build a basic To-Do List application where users can:

1. Add, edit, and delete tasks.
2. Toggle between light and dark themes.
3. Persist tasks and theme preferences in the browser (localStorage).

#### **Requirements:**

##### **1. To-Do List Functionality:**

- Use `useState` to manage the list of tasks.
- Each task should have:
  - A unique ID.
  - A text description.
  - A completion status (complete/incomplete).
- Implement the ability to:
  - Add a new task.
  - Edit an existing task.
  - Delete a task.
  - Mark a task as complete/incomplete.

##### **2. Theme Toggle:**

- Use `useContext` to manage the light/dark theme globally.
- Add a toggle button that allows the user to switch themes.

##### **3. Persistent State:**

- Use `useEffect` to:
  - Load tasks and theme preferences from `localStorage` when the app loads.
  - Save tasks and theme preferences to `localStorage` whenever they change.

##### **4. UI Requirements:**

- Display tasks in a list format with options to edit, delete, and mark as complete.
- Show completed tasks with a different style (e.g., strikethrough).
- Provide a toggle button for switching between light and dark themes.

##### **Bonus:**

- Add a counter to show the number of completed tasks.
- Add basic validation to ensure tasks cannot be empty.

---

#### **Evaluation Criteria:**

1. Correct use of `useState` for managing the tasks and form inputs.
2. Effective use of `useEffect` for handling `localStorage` integration.
3. Proper use of `useContext` to manage and propagate theme state.
4. Clean and modular code structure.
5. Functional and visually appealing UI.

---

This project should challenge your understanding of state management, lifecycle hooks, and context in React while keeping the scope manageable.
