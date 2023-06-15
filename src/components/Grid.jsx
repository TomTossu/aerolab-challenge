import React from 'react'
import { Grid as ChakraGrid, Container } from '@chakra-ui/react'

import ProductCard from './ProductCard'

function Grid({ products }) {

    return (
        <Container maxWidth={'7xl'}>
            <ChakraGrid templateColumns={'repeat(auto-fill, minmax(256px,1fr))'} gap={6}>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </ChakraGrid >
        </Container>
    )
}

export default Grid