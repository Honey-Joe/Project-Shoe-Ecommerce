import { useState } from "react";
import Layout from "./Layouts/Layout";
import Example from "./components/Product";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
