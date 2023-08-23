import Signup from './Components/Signup-folder/Signup';
import Create from './Components/Signup-folder/Create';
import Login from  './Components/Login/Login'
import './App.css';
import Home from './pages/Home/Home';
import Nav from './Components/Navbar/Nav';
import { Routes,
Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Signup/>
      <Create/>
      <Login/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Nav/>}/>
        <Route path='/home' element={<Home/>}/>
       
     </Routes> */}
    </>
 );
}

export default App;
