import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technician from "./pages/Technician";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Redux from "./pages/Redux";
import TodoRedux from "./pages/TodoRedux";
import TodoLocalStorage from "./pages/TodoLocalStorage";
import State from "./pages/State";
import MountExample from "./pages/UseEffect";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technicians" element={<Technician />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/to-do" element={<Todo />} />
      <Route path="/redux" element={<Redux />} />
      <Route path="/to-do-redux" element={<TodoRedux />} />
      <Route path="/to-do-local" element={<TodoLocalStorage />} />
      <Route path="/state" element={<State />} />
      <Route path="/use-effect" element={<MountExample />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;