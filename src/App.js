import './Styles/App.scss'
import Home from './Pages/Home'
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes >
    </div>
  );
}

export default App;
