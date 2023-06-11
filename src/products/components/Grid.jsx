import React from 'react'
import { Grid as ChakraGrid } from '@chakra-ui/react'

import ProductCard from './ProductCard'

function Grid({ products }) {

    return (
        <ChakraGrid templateColumns={'repeat(auto-fill, minmax(256px,1fr))'} gap={6} width={'100%'}>
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}

        </ChakraGrid >
    )
}

export default Grid