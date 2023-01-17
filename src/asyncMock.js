const products = [
    {
        id: '1',
        name: 'figura1',
        category: 'figuraGrande',
        price: 1000,
        img: 'https://i.etsystatic.com/36658868/r/il/a56bbf/4350739374/il_fullxfull.4350739374_h3kl.jpg',
        description: "chainsaw demon",
        stock: 5
    },
    {
        id: '2',
        name: 'figura2',
        category: 'figuraMediana',
        price: 800,
        img: 'https://media.spdigital.cl/__sized__/products/a7wvu57g_20a048ad-thumbnail-1080x1080-70.jpg',
        description: "Zero",
        stock: 0
    },
    {
        id: '3',
        name: 'figura3',
        category: 'figuraChica',
        price: 500,
        img: 'https://www.geekz.cl/image/cache/catalog/F4F/5060316623282_00-250x250.jpg',
        description: "Kirby",
        stock: 10
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products)
            , 1500
        )
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products.filter(prod => prod.category === categoryId))
            , 1500
        )
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products.find(prod => prod.id === id))
            , 1500
        )
    })
}
