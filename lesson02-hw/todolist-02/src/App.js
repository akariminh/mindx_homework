import './App.css';
import Toggle from './Components/Toggle.js';
import Table from './Components/Table.js';
import {useState} from 'react';
import React from "react";


function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <div className="wrapper">
      <Toggle />
      <Table todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
    
    </div>
  );
}

export default App;
