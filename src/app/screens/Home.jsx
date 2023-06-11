import React from 'react'
import { Flex, Heading, Stack } from '@chakra-ui/react'
import header from "../../assets/header.png"

import ProductList from '../../products/components/ProductList'

function HomeScreen() {
    return (
        <Stack flex={1} spacing={6}>
            <Flex
                alignItems={'flex-end'}
                justifyContent={'flex-start'}
                bgSize={'cover'}
                bgImage={`url(${header})`}
                borderRadius={'md'}
                minHeight={64}
                padding={6}
            >
                <Heading color={'white'} fontSize={'4xl'}>Electronics</Heading>
            </Flex>
            <ProductList />
        </Stack>
    )
}

export default HomeScreen