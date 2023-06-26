import AddBtn from "./AddBtn.js"
import React from "react";

const Form = ({ setInputText, inputText, onAddTodo }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const onSubmitTodoHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random() * 100,
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