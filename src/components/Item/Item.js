import { Link } from "react-router-dom"
/* import { useContext } from "react"
import { cartContext } from "../../App" */

const Item = ({ id, name, img, description, price }) => {


    return (
        <div>
            <h4 >{name}</h4>
            <img src={img} alt={description} />
            <p> {price} </p>
            <button>
                <Link to={`/id/${id}`}>Mas Informacion</Link>
            </button>
        </div>
    )
}

export default Item