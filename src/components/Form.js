import React from "react";

const Form = ({ inputText, setInputText,todos, setTodos, setStatus }) => {
   const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
   }
   const submitTodoHndler = (e) =>{
       e.preventDefault()
       console.log("submitTodoHndler")
       setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000  }]);
       setInputText("") //to remove old value of (inputText) => set inputText to empty value => ""

   }
   const statusHandler = (e) => {
    setStatus(e.target.value)
   }





    return(
        <form>
      <input type="text" value={inputText} onChange={inputTextHandler} className="todo-input" />
      <button className="todo-button" type="submit" onClick={submitTodoHndler} >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}
export default Form;