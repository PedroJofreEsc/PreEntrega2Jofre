import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
const CartList = ({ cart }) => {

    return (
        <div>
            {
                cart.map(
                    prod => <ItemCart key={prod.id} {...prod} />
                )
            }
            <Link to='/checkout' > terminar compra  </Link>
        </div>

    )
}

export default CartList