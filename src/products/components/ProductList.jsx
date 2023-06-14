import React, { useContext, useMemo, useState } from 'react'

import { ProductsContext } from '../context'

import Grid from './Grid'
import Count from './Count'
import SortByFilter from './SortByFilter'
import { Divider, Stack } from '@chakra-ui/react'
import { FILTERS_VALUES, CATEGORIES_VALUES } from '../constants/constants'
import CategoryFilter from './CategoryFilter'

function ProductList() {
    const { products } = useContext(ProductsContext)
    const [filter, setFilter] = useState(FILTERS_VALUES.MostRecent)
    const [category, setCategory] = useState(CATEGORIES_VALUES.AllProducts)
    const [filteredProducts, setFilteredProducts] = useState([...products])

    useMemo(() => {
        switch (filter) {
            case FILTERS_VALUES.HighestPrice: {
                return setFilteredProducts([...products].sort((a, b) => b.cost - a.cost))
            }

            case FILTERS_VALUES.LowestPrice: {
                return setFilteredProducts([...products].sort((a, b) => a.cost - b.cost))
            }

            case FILTERS_VALUES.MostRecent:
            default: {
                return setFilteredProducts(products)
            }
        }
    }, [filter, products])

    useMemo(() => {
        if (category === CATEGORIES_VALUES.AllProducts) {
            return setFilteredProducts(products)
        }

        return setFilteredProducts([...products].filter(product => product.category === category))
    }, [category, products])

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
                <CategoryFilter onChange={setCategory} />
                <SortByFilter active={filter} onChange={setFilter} />
            </Stack>
            <Divider borderColor={'gray.300'} />
            <Grid products={filteredProducts} />
            <Count products={filteredProducts} />
        </Stack >
    )
}

export default ProductList