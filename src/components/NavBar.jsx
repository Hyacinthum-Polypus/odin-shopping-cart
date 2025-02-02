import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import '../styles/NavBar.css'
import { useContext } from 'react'
import ShopContext from '../contexts/ShopContext'

const NavBar = () => {
    const { cartItems } = useContext(ShopContext);

    return (
        <div id="nav-bar">
            <Link to="/">
                <img src={logo} id="logo" alt="logo" />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/Shopping">Shopping</Link></li>
                    <li><Link to="/Cart">Cart{cartItems.length > 0 ? <span className="numItems"> #{cartItems.length}</span> : null}</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;