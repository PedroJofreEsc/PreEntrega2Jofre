import { useState } from "react"


const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0)

    const decrease = () => {
        if (count === 0) {
        } else {
            setCount(count => count - 1)
        }
    }

    const increase = () => {
        if (count === stock) {
        } else {
            setCount(count => count + 1)
        }
    }


    return (
        <div>

            <p>
                <button onClick={decrease}>-</button>
                {count}
                <button onClick={increase}>+</button>
            </p>
            <button onClick={() => onAdd(count)}>agregar carro</button>


        </div>

    )
}

export default ItemCount