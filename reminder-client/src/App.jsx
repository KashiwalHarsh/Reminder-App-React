import Main from "./pages/main-page/Main"
import Test from "./pages/test-page/Test"
import Login from "./pages/login-page/Login"
import Register from "./pages/register-page/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from "react";

function App() {

  const [user,setUser] = useState({})

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route exact path="/" element={user ? <Main/>:<Login setLoginUser={setUser}/>}/>
            <Route path="/test" element={user ?<Test/>:<Login setLoginUser={setUser}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
