import React, { useContext, useMemo, useState } from 'react'

import { ProductsContext } from '../products/context'

import Grid from './Grid'
import SortByFilter from './SortByFilter'
import { Divider, Stack, Text } from '@chakra-ui/react'
import { SORT_VALUES, CATEGORIES_VALUES } from '../products/constants/constants'
import CategoryFilter from './CategoryFilter'
import { useUser } from '../user/hooks'

const sortFunctions = {
    [SORT_VALUES.HighestPrice]: (a, b) => b.cost - a.cost,
    [SORT_VALUES.LowestPrice]: (a, b) => a.cost - b.cost,
    [SORT_VALUES.NewestFirst]: (a, b) => new Date(b.createDate) - new Date(a.createDate),
    [SORT_VALUES.OldestFirst]: (a, b) => new Date(a.createDate) - new Date(b.createDate)
}

function ProductList({ screen }) {
    const [user] = useUser()
    const { products } = useContext(ProductsContext)
    const [filter, setFilter] = useState()
    const [category, setCategory] = useState(CATEGORIES_VALUES.AllProducts)

    const productsArray = useMemo(() => {
        const PRODUCT_OPTIONS = {
            history: [...user.redeemHistory],
            homescreen: [...products]
        }
        return PRODUCT_OPTIONS[screen]
    }, [screen, user, products])

    const [filteredProducts, setFilteredProducts] = useState(productsArray)


    useMemo(() => {
        let newProductsArr = [...productsArray]

        if (category !== CATEGORIES_VALUES.AllProducts) {
            newProductsArr = [...newProductsArr].filter(product => product.category === category)
        }

        const sortFunction = sortFunctions[filter]

        if (sortFunction) {
            newProductsArr = [...newProductsArr].sort(sortFunction)
        } else {
            newProductsArr = [...newProductsArr]
        }

        setFilteredProducts(newProductsArr)
    }, [productsArray, category, filter])

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
                <SortByFilter active={filter} onChange={setFilter} screen={screen} />
            </Stack>
            <Divider borderColor={'gray.300'} />
            <Grid products={filteredProducts} screen={screen} />
            <Text>{products.length} of {products.length}</Text>
        </Stack >
    )
}

export default ProductList