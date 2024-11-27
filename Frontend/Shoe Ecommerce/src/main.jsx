import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ProductRoute from "./components/ProductRoute/ProductRoute";

const AppLayout = ()=>{
  return(
    <>
      mainroute
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