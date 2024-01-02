import Main from "./pages/main-page/Main"
import Login from "./pages/login-page/Login"
import Register from "./pages/register-page/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginContext from "./pages/context/LoginContext";
import { useContext, useEffect} from "react";

function App() {

  // const [user,setLoginUser] = useState(null)
  const {user,setLoginUser}= useContext(LoginContext)

  useEffect(()=>{
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  },[setLoginUser])

  const updateUser = (user)=>{
    localStorage.setItem("MyUser",JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login updateUser={updateUser}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route exact path="/" element={user && user._id ?<Main/>:<Login updateUser={updateUser}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
