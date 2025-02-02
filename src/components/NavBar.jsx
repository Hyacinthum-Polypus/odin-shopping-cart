import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <div id="nav-bar">
            <Link to="/">
                <img src={logo} id="logo" alt="logo" />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/Shopping">Shopping</Link></li>
                    <li><Link to="/Cart">Cart</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;