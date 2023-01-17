import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'


const ItemlistContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])
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