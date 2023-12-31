import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/profile" element ={<Profile/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/register" element ={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
