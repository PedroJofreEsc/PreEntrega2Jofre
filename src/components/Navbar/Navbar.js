import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import React from 'react'


const Navbar = () => {
    return (
        <nav>
            <h1>
                figuras
            </h1>
            <div>
                <button>
                    <Link to='/category/figuraGrande' > Grande  </Link>
                </button>
                <button>
                    <Link to='/category/figuraMediana' > Mediana  </Link>
                </button>
                <button>
                    <Link to='/category/figuraChica' > Chica  </Link>
                </button>
            </div>

            <CartWidget />

        </nav>
    )
}

export default Navbar