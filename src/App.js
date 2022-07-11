import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/clients' element={<Clients/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
