import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => {
                return [...prev, productToAdd]
            }
            )
        }

    }
    const isInCart = (id) => {
        return cart.some(prod => id === prod.id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const cartUpdate = cart.filter(prod => prod.id !== id)
        setCart(cartUpdate)

    }


    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(prod => { total += prod.quantity })
        return (total)
    }
    const totalQuantity = getTotalQuantity()

    const getTotalPrice = () => {
        let total = 0
        cart.forEach(prod => { total += prod.price * prod.quantity })
        return (total)
    }
    const totalPrice = getTotalPrice()

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, clearCart, totalQuantity, totalPrice, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
