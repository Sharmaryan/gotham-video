import "./App.css";
import { Navbar } from "./components/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
