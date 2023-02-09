import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { NotificationContext } from "../../notification/NotificationService"

const ItemDetail = ({ id, name, description, img, category, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const setNotification = useContext(NotificationContext)
    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        if (quantity > 0) {
            setQuantity(parseInt(quantity))
            addItem({ id, name, price, quantity })

            setNotification('sucess', `se agregaron ${quantity} ${name}`)
        }
    }



    return (
        <div>
            <h1>{name} </h1>
            <img src={img} alt={description} />
            <h2>{category}</h2>
            <p>{description} </p>
            <p>Precio:{price} </p>
            <p>Stock:{stock} </p>
            <footer>
                {isInCart(id) ?
                    (<div>
                        <Link to='/cart'> terminar compra </Link>
                        <Link to='/'> volver a tienda </Link>
                    </div>
                    )
                    :
                    (<ItemCount stock={stock} onAdd={handleOnAdd} />)
                }
            </footer>
        </div>
    )
}

export default ItemDetail