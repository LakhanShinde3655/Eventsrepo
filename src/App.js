import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Events from './Events';
import Home from './components/Home';
import Movies from './components/Movies';
import Plays from './components/Plays';
import Sports from './Sports'
import Activities from './components/Activities'
import Buzz from './Buzz';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar></Navbar>
<Routes>
<Route path='/' element={<Home> </Home>}></Route>
<Route path='/Events' element={<Events> </Events>}></Route>
<Route path='/Movies' element={<Movies> </Movies>}></Route>
<Route path='/Plays' element={<Plays></Plays>}></Route>
<Route path='/Sports' element={<Sports></Sports>}></Route>
<Route path='/Activities' element={<Activities></Activities>}></Route>
<Route path='/Buzz' element={<Buzz></Buzz>}></Route>



</Routes>





    </BrowserRouter>
 
    </div>
  );
}

export default App;
