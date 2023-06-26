import Form from "./Form.js"
import TaskStt from "./TaskStt.js"
import TaskList from "./TaskList.js"
import { useState } from 'react';


const Table = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState("");
    const onAddNewTodoHandler = (newTodo) => {
      setTodos([...todos, newTodo ]);
      console.log(todos);
  }
//   const onRemoveTaskHandler = (e) => {
//     return console.log(e)
// }

    return (
        <div className="container">
            <Form
                className="my-form"
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                inputText={inputText} 
                onAddTodo={onAddNewTodoHandler}/>
            <TaskStt />
            <TaskList todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default Table 