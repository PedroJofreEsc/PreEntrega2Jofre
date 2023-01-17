import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../asyncMock"

import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductsById(productId).then(
            product => {
                setProduct(product)
            }


        ).catch(error => {
            console.log(error)
        })
    }, [productId]

    )

    return (

        <div>
            <ItemDetail {...product} />

        </div>
    )
}

export default ItemDetailContainer