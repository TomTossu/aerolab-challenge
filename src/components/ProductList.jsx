import React, { useContext, useMemo, useState } from 'react'

import { ProductsContext } from '../products/context'

import Grid from './Grid'
import Count from './Count'
import SortByFilter from './SortByFilter'
import { Divider, Stack } from '@chakra-ui/react'
import { SORT_VALUES, CATEGORIES_VALUES } from '../products/constants/constants'
import CategoryFilter from './CategoryFilter'
import { useUser } from '../user/hooks'

function ProductList({ screen }) {
    const [user] = useUser()
    const { products } = useContext(ProductsContext)

    const productsArray = useMemo(() => {
        const PRODUCT_OPTIONS = {
            history: [...user.redeemHistory],
            homescreen: [...products]
        }
        return PRODUCT_OPTIONS[screen]
    }, [screen, user, products])

    const [filter, setFilter] = useState()
    const [category, setCategory] = useState(CATEGORIES_VALUES.AllProducts)
    const [filteredProducts, setFilteredProducts] = useState(productsArray)

    useMemo(() => {
        let newProductsArr = [...productsArray]

        if (category !== CATEGORIES_VALUES.AllProducts) {
            newProductsArr = [...newProductsArr].filter(product => product.category === category)
        }

        switch (filter) {
            case SORT_VALUES.HighestPrice: {
                newProductsArr = [...newProductsArr].sort((a, b) => b.cost - a.cost)
                break
            }

            case SORT_VALUES.LowestPrice: {
                newProductsArr = [...newProductsArr].sort((a, b) => a.cost - b.cost)
                break
            }

            case SORT_VALUES.NewestFirst: {
                newProductsArr = [...newProductsArr].sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
                break
            }

            case SORT_VALUES.OldestFirst: {
                newProductsArr = [...newProductsArr].sort((a, b) => new Date(a.createDate) - new Date(b.createDate))
                break
            }

            default: {
                newProductsArr = [...newProductsArr]
            }
        }

        console.log(newProductsArr)
        setFilteredProducts(newProductsArr)
    }, [filter, category, productsArray])

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
            <Count products={filteredProducts} />
        </Stack >
    )
}

export default ProductList