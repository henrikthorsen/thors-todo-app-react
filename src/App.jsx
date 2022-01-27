// start the server: npm start
// location: http://localhost:1234/

import "./App.css"; //added by Thor

/* export const addToDo = () => {

}
export const addTodoEnter = () => {
  //should be incorporated into addTodo()
}

export const removeToDo = () => {

}

export const toggleStatus = () => {

} */

export const toggleMode = () => {
    const bodyElement = document.querySelector("body"); //the body element is saved in a variable
    const h1Element = document.querySelector("h1"); //the h1 element is saved in a variable
    const btnModeElement = document.querySelector("#btn-change-mode"); //the button element is saved in a variable
    bodyElement.classList.toggle("background-color-dark-mode"); //toggles the dark-mode background color
    h1Element.classList.toggle("text-color-dark-mode"); //toggles the dark-mode text color
    if (btnModeElement.innerText === "Dark mode") { //toggles the button text between Dark and Light mode 
        btnModeElement.innerText = "Light mode"
    } else {
        btnModeElement.innerText = "Dark mode"
    }
}

/*
export const showAllTodos = () => {

}
export const filterUndoneTodos = () => {
  //should be incorporated into showAllTodos()
}
export const filterDoneTodos = () => {
  //should be incorporated into showAllTodos()
} */

export const Button = (props) => {
  return (
    <button id={props.id} className={props.className} onClick={props.onClickAction}>
      {props.text}
    </button>
  )
}

  export const Header = (props) => {
  return (
    <header className="flex justify-content-space-between">
        <h1><span className="color-gray">Grey </span> <span className="color-salmon">Salmon</span> Todos</h1>
        <Button id="btn-change-mode" className="button background-color-inactive-button" text="Dark mode" onClickAction={toggleMode} />
		</header>
  )
}

export const SubHeader = () => {
  return (
    <div id="subheader" className="flex justify-content-flex-end">
        <Button id="btn-filter-all" className="button background-color-active-button" text="All" />
        <Button id="btn-filter-undone" className="button background-color-inactive-button" text="Undone" />
        <Button id="btn-filter-done" className="button background-color-inactive-button" text="Done" />
    </div>
  )
}
//<Button id="btn-filter-all" className="button background-color-active-button" text="All" onClickAction={showAllTodos} />
//<Button id="btn-filter-undone" className="button background-color-inactive-button" text="Undone" onClickAction={filterUndoneTodos} />
//<Button id="btn-filter-done" className="button background-color-inactive-button" text="Done" onClickAction={filterDoneTodos} />
 
export const List = () => {
  return (
    <div id="list-wrapper">
      <ul id="todos">
      </ul>
    </div>
  )
}

export const InputField = (props) => {
  return (
    <div id="input-field" className="flex justify-content-space-between align-items-center">
      <input id="todo-title-input" type="text"
      placeholder="Enter todo" autoFocus/>
      <Button id="btn-add-todo" text="Add" />
    </div>
  )
}
//<Button id="btn-add-todo" text="Add" onClickAction={props.myInput} />

export const Main = (props) => {
  return (
    <main>
      <List />
      <InputField />
    </main>
  )
}
// <InputField myInput={this.handleInput}/>

export const App = () => {
  const state = { todoList: [] };
  
  /* handleInput = () => {
    const val = document.getElementById("todo-title-input").value;
    const updatedTodoList = this.state.todoList.concat(val);
    this.setState({
      todoList: updatedTodoList,
    });
    document.getElementById("todo-title-input").value = ""; //sets the input value to blank again
  }; */
  
  return (
    <div>
      <Header />
      <SubHeader />
      <Main />
    </div>
    )
}