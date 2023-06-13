import React from 'react'

import { Container, Center, Flex } from '@chakra-ui/react'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <Flex direction="column">
            <Navbar />
            <Center paddingY={6}>
                <Container maxWidth={'9xl'}>
                    {children}
                </Container>
            </Center>
        </Flex >
    )
}

export default Layout