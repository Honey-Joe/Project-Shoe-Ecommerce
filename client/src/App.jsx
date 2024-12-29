import { useState } from "react";
import Layout from "./Layouts/Layout";
import Example from "./components/Product";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/details' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
