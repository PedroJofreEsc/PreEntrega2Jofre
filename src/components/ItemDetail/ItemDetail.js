import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, description, img, category, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (qty) => {
    }
    return (
        <div>
            <h1>{name} </h1>
            <img src={img} alt={description} />
            <h2>{category}</h2>
            <p>{description} </p>
            <p>Precio:{price} </p>
            <p>Stock:{stock} </p>
            <ItemCount stock={stock} onAdd={handleOnAdd} />

        </div>
    )
}

export default ItemDetail