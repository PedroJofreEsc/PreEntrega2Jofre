import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import React from 'react'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Navbar = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <nav>
            <h1>
                <Link to='/'>
                    figuras
                </Link>

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

            <CartWidget quantity={totalQuantity} />

        </nav>
    )
}

export default Navbar