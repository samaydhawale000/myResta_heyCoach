import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import RestaForm from "./pages/RestaForm";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addRestaurant" element={<RestaForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
