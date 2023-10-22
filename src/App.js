
import './App.css';
import Navbars from './Components/Navbars';
import { Routes, Route } from "react-router-dom";
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Description from './Pages/Description';

function App() {
  return (
    <div className="overflow-x-hidden pb-10">

      <div className='bg-slate-900'>
        <Navbars />
      </div>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/description" element={<Description />} />
      </Routes>

    </div>
  );
}

export default App;
