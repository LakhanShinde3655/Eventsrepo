import React from 'react'
import Add from '../Add';
import Add2 from './Add2';
import Carasoul from './Carasoul';
import Latestmovies from './Letestmovies';
import Liveevents from './Liveevents';

function Home() {
  return (
    <div>
        
    <Carasoul></Carasoul>
    <Add></Add>
    <h2 style={{display:"flex" ,marginLeft:"120px",marginTop:"20px",marginBottom:"-40px"}}>Recommended Movies</h2>
    <Latestmovies></Latestmovies> 
      <Add2></Add2>
      
<h1 style={{marginLeft:"-900px", marginBottom:"-100px",marginTop:"100px",}}> The Best Of Live Events</h1>
      <Liveevents></Liveevents>
    </div>
  )
}

export default Home