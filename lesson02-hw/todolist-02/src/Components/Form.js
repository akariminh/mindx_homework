import AddBtn from "./AddBtn.js"
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setInputText, inputText, onAddTodo }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const onSubmitTodoHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uuidv4(),
            title: inputText,
            isCompleted: false,
            color: "default"
        };
        onAddTodo(newTodo);
        setInputText("");
    }
    return (
        <form className="my-form" onSubmit={onSubmitTodoHandler}>
            <input type="text" value={inputText} placeholder="New Task" onChange={inputTextHandler} />
            <AddBtn type="submit" />
        </form>
    )
}

export default Form