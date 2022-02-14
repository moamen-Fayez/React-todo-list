import  React, { useState, useEffect }  from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState("all")
const [filterdTodos, setFilterdTodos] = useState([]);


useEffect( () => {
  getlocalTodos()
}

,[])

useEffect( () => {
  filterdTodosHandler();
  saveLocalTodos()
}
,[status, todos])



const filterdTodosHandler = () => {
  switch(status) {
    case "completed" : setFilterdTodos(todos.filter(todo => todo.completed === true  ))
    break;
    case "uncompleted" : setFilterdTodos(todos.filter(todo => todo.completed === false  ))
    break;
    default : setFilterdTodos(todos)
    break;  
  }
}



const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos)) 
}
const getlocalTodos = () => {
  if(localStorage.getItem("todos") === null) { localStorage.setItem("todos", JSON.stringify([])) }
  else { let localtodo = JSON.parse(localStorage.getItem("todos"))
     setTodos(localtodo)
     }
  
  
  }




  return (
    <div className="App">
      <header>
      <h1>moamen's Todo List</h1>
    </header>
    <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
    <TodoList  filterdTodos={filterdTodos} todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
