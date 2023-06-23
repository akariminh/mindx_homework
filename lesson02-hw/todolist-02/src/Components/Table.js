import Form from "./Form.js"
import TaskStt from "./TaskStt.js"
import TaskList from "./TaskList.js"
import React from "react"


const Table = ({ todos, setTodos, setInputText, inputText }) => {

    return (
        <div className="container">
            <Form 
            className="my-form" 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
            inputText={inputText} />
            <TaskStt />
            <TaskList todos={todos}/>
        </div>
    )
}

export default Table 