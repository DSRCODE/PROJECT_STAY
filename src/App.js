import './App.css';
import Home from './pages/Home/Home';
import Nav from './Components/Navbar/Nav';
import { Routes,
Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Nav/>}/>
        <Route path='/home' element={<Home/>}/>
       
     </Routes>
    </>
 );
}

export default App;
