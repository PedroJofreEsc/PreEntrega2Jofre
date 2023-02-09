
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../service/firebase/firebaseConfig"
import ItemCart from "../ItemCart/ItemCart"

const Checkout = () => {

    const [orderId, setOrderId] = useState()
    const [loading, setLoading] = useState(false)
    const [sinStock, setSinStock] = useState()
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    const [orderValue, setOrderValue] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target

        const newOrderValue = { ...orderValue, [name]: value, }

        setOrderValue(newOrderValue)
    }

    const createOrder = async () => {
        setLoading(true)
        try {

            const objOrder = {
                buyer: {
                    name: orderValue.name,
                    phone: orderValue.phone,
                    email: orderValue.email,
                },
                items: cart,
                total: totalPrice
            }

            const batch = writeBatch(db)
            const ids = cart.map(prod => prod.id)

            const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedToCartFromFirestore = await getDocs(productRef)
            const { docs } = productsAddedToCartFromFirestore
            const outStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded
                setOrderId(id)

                clearCart()


            } else {
                /* console.log('no quedan') */
                setSinStock(outStock)
            }
        } catch (error) {
            console.error(error)
        }
        finally { setLoading(false) }
    }

    if (loading) {
        return (
            <div>
                <h2>generando orden</h2>
            </div>
        )
    }

    if (sinStock) {
        return (
            <div>
                <h1>Lo sentimos, los siguientes articulos no tienen el stock solicitado</h1>
                {
                    sinStock.map(
                        prod => <ItemCart key={prod.id} {...prod} />
                    )
                }
            </div>

        )
    }

    if (orderId) {
        return (
            <h1>
                su orden fue generada,su codigo es : {orderId}
            </h1>
        )
    }

    return (
        <div>
            <form >
                <label>nombre</label>
                <input type='text' placeholder='nombre de contacto' id='name' onChange={handleChange} name="name" value={orderValue.name} /><br />
                <label>telefono</label>
                <input type='text' placeholder='numero de contacto' id='phone' onChange={handleChange} name="phone" value={orderValue.phone} /><br />
                <label>correo</label>
                <input type='text' placeholder='correo de contacto' id='email' onChange={handleChange} name="email" value={orderValue.email} /><br />
                <label>comentario</label>
                <textarea></textarea><br />
                {/* <button type="submit" >mandar orden </button> */}

                <button type="submit" onClick={createOrder}>mandar orden </button>
            </form>
        </div>
    )

}

export default Checkout