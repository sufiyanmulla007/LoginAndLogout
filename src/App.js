import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginApi from "./components/LoginApi";
import Home from "./components/Home";
function App() {
  
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="LoginApi" element={<LoginApi/>}/>
    </Routes>
    </>
  );
}

export default App;
