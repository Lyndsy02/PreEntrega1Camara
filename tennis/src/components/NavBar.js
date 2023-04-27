import CartWidget from "./CartWidget/CartWidget"
const NavBar = () => {
return (
    <nav>
        <h3> Tennis Shop</h3>
        <div>
            <button>Raquetas</button>
            <button>Zapatillas</button>
            <button>Pelotas</button>
        </div>
        <CartWidget />
    </nav>

   )
}

export default NavBar
