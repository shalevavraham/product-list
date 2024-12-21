import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Header from "./component/header";

function App() {
  return (
  <div>
    <Header/>
      <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
