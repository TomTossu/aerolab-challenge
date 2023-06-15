import React from 'react'

import profile from '../assets/icons/profile.svg'
import { Divider, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useColorModeValue, useColorMode, Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon, TimeIcon } from '@chakra-ui/icons'

import { useUser } from '../user/hooks'
import { Link } from 'react-router-dom'

function UserMenu() {
    const [user] = useUser()
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Menu>
            <MenuButton>
                <Image src={profile} w={8} h={8} bgColor={'gray.200'} borderRadius={9999} />
            </MenuButton>
            <MenuList w={'16rem'}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} w={'100%'} fontWeight={500} fontSize={20}>
                    <Text paddingX={4}>{user.name}</Text>
                    <Button marginX={1} bg={colorMode} onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Stack>
                <Stack >
                    <Divider borderColor={useColorModeValue('black', 'white')} paddingY={1} />
                    <Link to={'/history'}>
                        <MenuItem icon={<TimeIcon />}>
                            Redeem History
                        </MenuItem>
                    </Link>
                </Stack>
            </MenuList>
        </Menu>
    )
}

export default UserMenu