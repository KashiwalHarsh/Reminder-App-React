import Main from "./pages/main-page/Main"
import Login from "./pages/login-page/Login"
import Register from "./pages/register-page/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from "react";

function App() {

  const [user,setLoginUser] = useState(null)

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route exact path="/" element={user && user._id ?<Main/>:<Login setLoginUser={setLoginUser}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
