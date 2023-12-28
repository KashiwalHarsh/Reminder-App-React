import Main from "./pages/main-page/Main"
import Test from "./pages/test-page/Test"
import Login from "./pages/login-page/Login"
import Register from "./pages/register-page/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
