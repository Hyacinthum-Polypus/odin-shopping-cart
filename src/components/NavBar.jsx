import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/Shopping">Shopping</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;