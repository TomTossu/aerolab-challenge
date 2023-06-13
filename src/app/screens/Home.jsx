import React from 'react'
import { Flex, Heading, Image, Stack } from '@chakra-ui/react'
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
                minHeight={'lg'}
                padding={6}
            >
                <Heading color={'white'} fontSize={'7xl'} textShadow={'3px 3px 3px orange'}>Electronics</Heading>
            </Flex>
            <ProductList />
        </Stack>
    )
}

export default HomeScreen