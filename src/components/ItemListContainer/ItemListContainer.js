import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"
//crear set loading

const ItemlistContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams()

    useEffect(() => {


        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        getDocs(collectionRef).then(response => {

            const productsAdapted = response.docs.map(
                doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                }
            )
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => setLoading(false))

        /* const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }) */
    }, [categoryId])
    if (loading) {
        return (
            <h1>cargando</h1>
        )
    }

    return (
        <div>
            <h1>
                {greeting} {categoryId}
            </h1>
            <ItemList products={products} />

        </div>
    )
}

export default ItemlistContainer