import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Cookies from "js-cookie";


const auth= Cookies.get("_auth_state");



export const Paths = () => {

    return (
    <BrowserRouter>
      <Routes>
        <Route path='/homepage' element={auth ? <Homepage/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    )
  }