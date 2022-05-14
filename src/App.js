import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appoingment from './Appointment/Appoingment';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appoingment></Appoingment>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
