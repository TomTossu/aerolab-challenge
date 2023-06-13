import React, { useContext, useMemo, useState } from 'react'

import { ProductsContext } from '../context'

import Grid from './Grid'
import Count from './Count'
import Filter from './Filter'
import { Divider, Stack } from '@chakra-ui/react'
import { FILTERS_VALUES } from '../constants/constants'

function ProductList() {
    const { products } = useContext(ProductsContext)
    const [filter, setFilter] = useState(FILTERS_VALUES.MostRecent)

    const filteredProducts = useMemo(() => {
        switch (filter) {
            case FILTERS_VALUES.HighestPrice: {
                return [...products].sort((a, b) => b.cost - a.cost)
            }

            case FILTERS_VALUES.LowestPrice: {
                return [...products].sort((a, b) => a.cost - b.cost)
            }

            case FILTERS_VALUES.MostRecent:
            default: {
                return products
            }
        }


    }, [filter, products])

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
                <Count products={filteredProducts} />
                <Filter active={filter} onChange={setFilter} products={filteredProducts} />
            </Stack>
            <Divider borderColor={'gray.300'} />
            <Grid products={filteredProducts} />
            <Count products={filteredProducts} />
        </Stack >
    )
}

export default ProductList