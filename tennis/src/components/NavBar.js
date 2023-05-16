import CartWidget from "./CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
return (
    <nav className= "NavBar" >
       <Link to='/'>
        <h3> Tennis Shop</h3>
       </Link>
        <div className= 'Categorias'>
            <NavLink to={`/category/Raquetas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Raquetas</NavLink>
            <NavLink to={`/category/Zapatillas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
            <NavLink to={`/category/Pelotas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pelotas</NavLink>
        </div>
        <CartWidget />
    </nav>

   )
}

export default NavBar
