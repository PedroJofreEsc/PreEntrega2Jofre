import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { Link } from 'react-router-dom';


const CartWidget = ({ quantity }) => {
    return (
        <Link to='/cart' className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size='2x' />
            <p className='cartQty'> {quantity}  </p>
        </Link>
    )
}

export default CartWidget