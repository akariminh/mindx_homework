import AddBtn from "./AddBtn.js"
import React from "react";

const Form = ({ todos, setTodos, setInputText, inputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
            id: Math.random()*100,
            title: {inputText},
            isCompleted: false,
            color: "default"
        }]);
        setInputText("");
    }
    return (
        <form className="my-form">
        <input type="text" value={inputText} placeholder="New Task" onChange={inputTextHandler}/>
        <AddBtn onClick={submitTodoHandler}/>
        </form>
    )
}

export default Form