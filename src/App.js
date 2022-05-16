import './Styles/App.scss'
import Home from './Pages/Home'
import Login from './Pages/login/Login';
import { Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes >

    </div>
  );
}

export default App;
