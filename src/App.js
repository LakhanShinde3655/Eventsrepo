import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Events from './Events';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar></Navbar>
<Routes>
<Route path='/' element={<Home> </Home>}></Route>
<Route path='/Events' element={<Events> </Events>}></Route>


</Routes>





    </BrowserRouter>
 
    </div>
  );
}

export default App;
