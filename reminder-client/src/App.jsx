import Main from "./pages/main-page/Main"
import Test from "./pages/test-page/Test"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/test" element={<Test/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
