import { Text } from '@chakra-ui/react'
import React from 'react'

function Count({ products }) {
    return (
        <Text>{products.length} of {products.length}</Text>
    )
}

export default Count