import React, { useContext } from 'react'

import { ProductsContext } from '../context'

import Grid from './Grid'
import { Divider, Stack } from '@chakra-ui/react'

function ProductList() {
    const { products } = useContext(ProductsContext)

    return (
        <Stack alignItems={'flex-start'} spacing={6}>
            <Stack
                alignItems={'center'}
                as={'nav'}
                direction={'row'}
                divider={<Divider borderColor={'gray.300'} height={12} orientation='vertical' />}
                flex={1}
                spacing={6}
                width={'100%'}
            >
                <>Count</>
                <>Filter</>
                {/* <Count />
                <Filter /> */}
            </Stack>
            <Grid products={products} />
            <>Count</>
        </Stack >
    )
}

export default ProductList