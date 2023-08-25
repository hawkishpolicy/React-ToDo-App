import "./App.css";
import NavBar from "./Components/NavBar";
import TodoApp from "./Components/TodoApp";
import NoteApp from "./Components/NoteApp";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <TodoApp />
      <NoteApp />
    </>
  );
}

export default App;
