import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import { getProductsById } from "../../asyncMock"
import { getDoc, doc, query, where } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../service/firebase/firebaseConfig"

const ItemDetailContainer = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const docRef = doc(db, 'products', productId)


        getDoc(docRef).then(doc => {

            const data = doc.data()
            const productAdapted = { id: doc.id, ...data }
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => { setLoading(false) })
        /*  getProductsById(productId).then(
             product => {
                 setProduct(product)
             }
         ).catch(error => {
             console.log(error)
         }) */
    }, [productId]

    )

    if (loading) {
        return (
            <h1>cargando</h1>
        )
    }

    return (

        <div>
            <ItemDetail {...product} />

        </div>
    )
}

export default ItemDetailContainer