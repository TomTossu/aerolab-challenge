import React from 'react'
import { Box, Image, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import logo from '../../assets/logo.svg'
import coin from '../../assets/icons/coin.svg'

import { usePoints } from '../../user/hooks'
import PointsMenu from '../../components/PointsMenu'
import UserMenu from '../../components/UserMenu'
import { Link } from 'react-router-dom'


function Navbar() {
    const [points, addPoints] = usePoints()

    return (
        <Box boxShadow={'md'} bg={useColorModeValue('white.100', 'gray.900')} px={4}>
            <Stack as={'nav'} paddingY={3} alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
                <Link to="/">
                    <Image src={logo} />
                </Link>
                <Stack
                    alignItems={'center'}
                    direction={'row'}
                    borderRadius={10}
                    bgColor={'cyan.200'}
                    boxShadow={'0px 2px 8px gray'}
                    paddingY={2}
                    paddingX={3}
                >
                    <Text fontWeight={500} color={'black'}> {points} </Text>
                    <Image h={6} w={6} src={coin} />
                </Stack>
                <Stack direction={'row'} alignItems={'center'} spacing={3}>
                    <PointsMenu points={points} addPoints={addPoints} />

                    <UserMenu />
                </Stack>
            </Stack>
        </Box>
    )
}

export default Navbar