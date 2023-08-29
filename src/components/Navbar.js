import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <div>
        <div className="navbar1">
            <img src="https://in.bmscdn.com/webin/common/icons/logo.svg"alt="" />
            <input type="text" placeholder='Search for movies,Events,Plays,Sports and Activities' />

        <select name="" id=""> <option value="">Chennai</option>
        <option value="">Mumbai</option>
        <option value="">Delhi</option>
        <option value="">Hyderabad</option>
        </select>
        <button> Sign in </button>
        </div>
       <div className='navbar2'>
            <Link to="/Movies">Movies</Link>
            <Link to="/Stream">Stream</Link>
            <Link to="/Events">Events</Link>
            <Link to="/Plays">Plays</Link>
            <Link to="Sports">Sports</Link>
            <Link to="Activities">Activities</Link>
            <Link to="Buzz">Buzz</Link>
             <Link><img width={250} src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" alt="" /></Link>

        
          </div>

        </div>
    )
}
export default Navbar;