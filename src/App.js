import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';

function App() {

  return (
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
      </Routes>
  );
}

export default App;
 
