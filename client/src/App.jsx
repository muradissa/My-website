import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
  } from "react-router-dom";
import "./style.scss"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider,useAuth } from "./contexts/AuthContext"

  const Layout = () =>{
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/project/:id",
          element:<Single/>
        },{
          path:"/contactForm",
          element:<ContactForm/>
        },
        
      ]
    },
    {
      path:"/login" ,element:<Login />
    },
    
  ]);
  
  function App() {
    return (
      <>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className="app">
        <div className="container">
          <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
          </AuthProvider>
        </div>
      </div>
      </>
    );
  }
  
  
  
  export default App;
  