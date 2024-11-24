import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route,useLocation} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import CategoryPage from "./Pages/CategoryPage";
import DashBoard from "./components/dashboard/DashBoard";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";
import WelcomPage from "./Pages/WelcomPage";
import PriviteRouter from "./components/utils/PriviteRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {  } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import EditForm from "./components/dashboard/editForm";
import AddProduct from "./components/dashboard/AddProduct";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>  
        <MainContent/>
      </BrowserRouter>    
    </div>
  );

  function MainContent(){
    const location = useLocation()
    const noNave = ['/signup','/signin','/dashboard','/addProduct','/editProduct']
    const hideNave = noNave.some((path) =>location.pathname.startsWith(path))
    const hideFooter = noNave.some((path) => location.pathname.startsWith(path))
    return (
      <div>
        {!hideNave && <Header/>}
        <Routes>
          <Route element ={<PriviteRouter/>}>  
            {/**all private routs */}
            <Route path="/dashboard/*" element={<DashboardPage />} />
            <Route path="/home" element ={<HomePage/>}/>
            <Route path="/category" element ={<CategoryPage/>}/>
          </Route>
          <Route path="/" element ={<WelcomPage/>}/>
          <Route path="/about" element ={<AboutUs/>}/>  
          <Route path="/signup" element ={<SignUpPage/>}/>
          <Route path="/signin" element ={<SignInPage/>}/>
          <Route path="/editProduct" element={<EditForm />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
        {!hideFooter && <Footer/>}
      </div>
    )
  }
}

export default App;
 
