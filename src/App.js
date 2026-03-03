import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technician from "./pages/Technician";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Redux from "./pages/Redux";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technicians" element={<Technician />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/to-do" element={<Todo />} />
      <Route path="/redux" element={<Redux />} />
    </Routes>
  );
}

export default App;