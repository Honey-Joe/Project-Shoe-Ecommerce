import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { useSelector } from "react-redux";

function App() {

  const userLoginReducer = useSelector((state)=>state.userLoginReducer);
  const {userInfo} = userLoginReducer;

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/login" element={userInfo?<Navigate to={"/"}></Navigate>:<Login></Login>}></Route>
        <Route path="/register" element={userInfo?<Navigate to={"/"}></Navigate>:<Register></Register>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
