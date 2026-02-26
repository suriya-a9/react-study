import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technician from "./pages/Technician";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technicians" element={<Technician />} />
    </Routes>
  );
}

export default App;