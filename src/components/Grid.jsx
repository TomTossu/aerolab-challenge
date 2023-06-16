import React from 'react'
import { Grid as ChakraGrid, Container } from '@chakra-ui/react'

import ProductCard from './ProductCard'
import HistoryCard from './HistoryCard'

function Grid({ products, screen }) {

    const cardsPerRow = screen === "homescreen" ? "auto-fill" : "1"

    function handleComponent(product, index, screen) {
        const TAG_OPTIONS = {
            homescreen: <ProductCard key={`${product._id}_${index}`} product={product} />,
            history: <HistoryCard key={`${product._id}_${index}`} product={product} />
        }

        return TAG_OPTIONS[screen]
    }

    return (
        <Container maxWidth={'7xl'}>
            <ChakraGrid templateColumns={`repeat(${cardsPerRow}, minmax(256px,1fr))`} gap={6}>
                {products.map((product, index) => (
                    handleComponent(product, index, screen)
                ))}
            </ChakraGrid >
        </Container >
    )
}

export default Grid