import React from 'react'
import { Box, Button, Image, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import logo from '../../assets/logo.svg'

import { usePoints, useUser } from '../../user/hooks'
import PointsMenu from '../../components/PointsMenu'


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
                    <PointsMenu user={user} points={points} addPoints={addPoints} />
                </Stack>
            </Stack>
        </Box>
    )
}

export default Navbar