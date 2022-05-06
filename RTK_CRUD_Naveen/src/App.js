import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Employees from "./components/Employees";
import UserList from "./components/UserList";
import Counter from "./components/Counter";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/userList" element={<UserList/>}/>
      </Routes>
    </div>
  );
}

export default App;
