import { v4 as uuidv4 } from "uuid";
import Form from "./Form.js";
import TaskList from "./TaskList.js";
import { useState } from "react";

const Table = () => {
  const [todoList, setTodoList] = useState([]);
  const [editingTodo, setEditingTodo] = useState({});
  const [todoStatus, setTodoStatus] = useState("completed");
  const onAddNewTodoHandler = (todo) => {
    const newTodo = { ...todo, id: uuidv4() };
    setTodoList([...todoList, newTodo]);
  };
  const onOpenUpdateTaskHandler = (id) => {
    // filter ra todo cần sửa
    const existingTodos = todoList.find((todo) => todo.id === id);
    if (!existingTodos) return;
    else {setEditingTodo(existingTodos)};
  };
  const updateTask = (updatedTodo) => {
    setTodoList(todoList.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else return todo;
    })
    );
    setEditingTodo({})
  }
  const onRemoveTaskHandler = (id) => {
    const filteredTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodos);
  };
  return (
    <div className="container">
      <Form
        className="my-form"
        todoList={todoList}
        setTodoList={setTodoList}
        onAddTodo={onAddNewTodoHandler}
        initialValues={editingTodo}
        updateTask={updateTask}
      />
      <div className="stt-container">
        <button className="btn">All</button>
        <button className="btn">Completed</button>
        <button className="btn">Uncompleted</button>
      </div>
      <TaskList
        todoList={todoList}
        setTodoList={setTodoList}
        onRemoveTaskHandler={onRemoveTaskHandler}
        onOpenUpdateTaskHandler={onOpenUpdateTaskHandler}
      />
    </div>
  );
};

export default Table;
