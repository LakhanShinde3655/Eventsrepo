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
            <Link className='li' to="/Movies">Movies</Link>
            <Link className='li' to="/Stream">Stream</Link>
            <Link className='li' to="/Events">Events</Link>
            <Link className='li' to="/Plays">Plays</Link>
            <Link className='li' to="Sports">Sports</Link>
            <Link className='li' to="Activities">Activities</Link>
            <Link className='li' to="Buzz">Buzz</Link>
             <Link className='li'><img width={250} src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" alt="" /></Link>

        
          </div>

        </div>
    )
}
export default Navbar;