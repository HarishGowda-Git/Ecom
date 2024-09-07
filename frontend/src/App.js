import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Items from "./components/Items";
import Contact from "./components/Contact";
const App = () => {
  const router = createBrowserRouter([
    {
       path: "/",
       element: <><Navbar /><Home/></>
    },
    {
       path:"/login",
       element: <><Navbar /> <Login /></>
    },
    {
       path:"/about",
       element: <><Navbar /><About /></>
    },
    {
       path:"/mens",
       element: <><Navbar /><Items  type="mens"/></>
    },
    {
       path:"/womens",
       element: <><Navbar /><Items  type="womens"/></>
    },
    {
       path:"/kids",
       element: <><Navbar /><Items  type="kids"/></>
    },
    {
       path:"/summer",
       element: <><Navbar /><Items  type="summer"/></>
    },
    {
       path:"/winter",
       element: <><Navbar /><Items  type="winter"/></>
    },
    {
       path:"/about",
       element: <><Navbar /><About /></>
    },
    {
       path:"/contact",
       element: <><Navbar /><Contact /></>
    }
 ])
  return ( 
    <>
      <RouterProvider router={router} />
    </>
   );
}
 
export default App;