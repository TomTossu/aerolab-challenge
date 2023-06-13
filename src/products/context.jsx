import { Center, CircularProgress } from "@chakra-ui/react";
import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "./api";

const ProductsContext = createContext()

function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])
    const [status, setStatus] = useState('pending')

    useEffect(() => {

        const fetchProducts = (async () => {
            const result = await getProducts()
            setProducts(result)
            setStatus("resolved")
        })

        fetchProducts()
    }, [])


    if (!products || status === "pending") {
        return (
            <Center>
                <CircularProgress isIndeterminate ></CircularProgress>
            </Center>
        )
    }

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider as Provider }
