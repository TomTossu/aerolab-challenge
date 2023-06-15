import React, { useContext, useMemo, useState } from 'react'

import { ProductsContext } from '../products/context'

import Grid from './Grid'
import Count from './Count'
import SortByFilter from './SortByFilter'
import { Divider, Stack } from '@chakra-ui/react'
import { FILTERS_VALUES, CATEGORIES_VALUES } from '../products/constants/constants'
import CategoryFilter from './CategoryFilter'

function ProductList() {
    const { products } = useContext(ProductsContext)
    const [filter, setFilter] = useState(FILTERS_VALUES.MostRecent)
    const [category, setCategory] = useState(CATEGORIES_VALUES.AllProducts)
    const [filteredProducts, setFilteredProducts] = useState([...products])

    useMemo(() => {
        let newProductsArr = [...products]

        if (category !== CATEGORIES_VALUES.AllProducts) {
            newProductsArr = [...newProductsArr].filter(product => product.category === category)
        }

        switch (filter) {
            case FILTERS_VALUES.HighestPrice: {
                newProductsArr = [...newProductsArr].sort((a, b) => b.cost - a.cost)
                break
            }

            case FILTERS_VALUES.LowestPrice: {
                newProductsArr = [...newProductsArr].sort((a, b) => a.cost - b.cost)
                break
            }

            case FILTERS_VALUES.MostRecent:
            default: {
                newProductsArr = [...newProductsArr]
                break
            }
        }

        setFilteredProducts(newProductsArr)
    }, [filter, category, products])

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