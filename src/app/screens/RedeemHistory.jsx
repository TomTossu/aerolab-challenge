import React from 'react'

import { Stack } from '@chakra-ui/react'
import ProductList from '../../components/ProductList'

function RedeemHistoryScreen() {
    return (
        <Stack flex={1} spacing={6}>
            <ProductList screen={"history"} />
        </Stack>
    )
}

export default RedeemHistoryScreen