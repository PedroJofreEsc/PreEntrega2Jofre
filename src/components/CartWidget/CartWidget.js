import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'


const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faCartShopping} size='2x' />
            <p className='cartQty'> 10</p>
        </div>
    )
}

export default CartWidget