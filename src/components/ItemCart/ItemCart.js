import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const ItemCart = ({ name, quantity, price, id }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <article>
            <h3>{name}</h3>
            <h4>cantidad:{quantity} </h4>
            <h4>precio:{price} </h4>
            <h4>total:{price * quantity} </h4>
            <button className="Option" onClick={() => removeItem(id)} > Eliminar</button>

        </article>

    )

}

export default ItemCart