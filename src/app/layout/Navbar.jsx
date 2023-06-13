import React from 'react'
import { Box, Button, Image, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import logo from '../../assets/logo.svg'
import coin from '../../assets/icons/coin.svg'

import { usePoints, useUser } from '../../user/hooks'


function Navbar() {
    const [user] = useUser()
    const [points, addPoints] = usePoints()
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box boxShadow={'md'} bg={useColorModeValue('white.100', 'gray.900')} px={4}>
            <Stack as={'nav'} paddingY={3} alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
                <Image src={logo} />
                <Stack direction={'row'} alignItems={'center'} spacing={3}>
                    <Button bg={colorMode} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Text>{user.name}</Text>
                    <Stack
                        alignItems={'center'}
                        direction={'row'}
                        cursor={'pointer'}
                        borderRadius={9999}
                        bgColor={useColorModeValue('gray.100', 'gray.700')}
                        paddingY={2}
                        paddingX={3}
                        onClick={() => addPoints(1000)}
                    >
                        <Text fontWeight={500}>{points}</Text>
                        <Image h={6} w={6} src={coin} />
                    </Stack>
                </Stack>

            </Stack>
        </Box>
    )
}

export default Navbar