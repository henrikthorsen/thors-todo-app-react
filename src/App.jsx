// export function App() {
//   return <h1>Hello Hello Hello!</h1>;
// }
import "./App.css"; //added by Thor

export const App = () => {
  return (
    <div>
      <header className="flex justify-content-space-between">
        <h1><span className="color-gray">Grey </span> <span className="color-salmon">Salmon</span> Todos</h1>
        <button id="btn-change-mode" className="button background-color-inactive-button">
          Dark mode
        </button>
		  </header>
      <div id="subheader" className="flex justify-content-flex-end">
        <button id="btn-filter-all" className="button background-color-active-button">
          All
        </button>
        <button id="btn-filter-undone" className="button background-color-inactive-button">
          Undone
        </button>
        <button id="btn-filter-done" className="button background-color-inactive-button">
          Done
        </button>
      </div>
      <main>
        <div id="list-wrapper">
          <ul id="todos">
          </ul>
        </div>
        <div id="input-field" className="flex justify-content-space-between align-items-center">
          <input id="todo-title-input" type="text"
          placeholder="Enter todo" autofocus/>
          <button id="btn-add-todo">
            Add
          </button>
        </div>
      </main>
    </div>
    )
}