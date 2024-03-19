import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signin from './Pages/Signin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/login' element={<Login/>} />
    <Route  path='/signin' element={<Signin/>} />
    
   </Routes>
    </BrowserRouter>
   
  );
}

export default App;
