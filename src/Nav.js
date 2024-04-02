import { useState } from 'react';
import logo from './assets/Logo .svg'

const Nav = (props) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const switchMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        /* Mobile Nav bar */
        /* Nav Items placed horizontally*/
        /* Link the Navigation Items*/
        <nav className={'navbar ${menuOpen ? "open":"" }'}>
            <a href='/' className='logo'>
                <img src={logo} alt='Logo' >
                </img>
            </a>
            <div className='menu-icon' onClick={switchMenu}>
                <div className="bar"> </div>
                <div className="bar"> </div>
                <div className="bar"> </div>

            </div>



            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li ><a href='/'> Home</a></li>
                <li ><a href='/' > About</a></li>
                <li ><a href='/'> Reservation</a></li>
                <li ><a href='/'> Order Online</a></li>
                <li ><a href='/'> Login</a></li>


            </ul>
        </nav >

    );
}
export default Nav;