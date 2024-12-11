import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductRoute from "./components/ProductRoute/ProductRoute";
import "./index.css"

const AppLayout = ()=>{
  return(
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout></AppLayout>
  },
  {
    path:"/product",
    element:<ProductRoute></ProductRoute>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)