import React, { useState } from 'react'

import { Button, Divider, Flex, Image, Menu, MenuButton, MenuList, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import coin from '../assets/icons/coin.svg'
import { POINTS_VALUES } from '../products/constants/constants'
import PointsButton from './PointsButton'

const FILTERS = [POINTS_VALUES.First, POINTS_VALUES.Second, POINTS_VALUES.Third]

function PointsMenu({ user, points, addPoints }) {
    const [selectedPoint, setSelectedPoint] = useState(POINTS_VALUES.First)

    return (
        <Menu>
            <MenuButton>
                <Stack
                    alignItems={'center'}
                    direction={'row'}
                    cursor={'pointer'}
                    borderRadius={9999}
                    bgColor={useColorModeValue('gray.100', 'gray.700')}
                    paddingY={2}
                    paddingX={3}
                >
                    <Text fontWeight={500}> {points} </Text>
                    <Image h={6} w={6} src={coin} />
                </Stack>
            </MenuButton>
            <MenuList display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'18rem'}>
                <Stack justifyContent={'flex-start'} alignItems={'flex-start'} w={'100%'} marginY={1} paddingX={4} fontWeight={500} fontSize={24}>
                    <Text>{user.name}</Text>
                </Stack>
                <Text padding={3} maxWidth={'100%'} >Please select how many coins you want to add to your account:</Text>
                <Divider borderColor={useColorModeValue('black', 'white')} w={'16rem'} />
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} margin={2} >
                    {FILTERS.map((point) => (
                        <PointsButton point={point} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint} />
                    ))}
                </Stack>
                <Button
                    alignItems={'center'} justifyContent={'center'}
                    marginBottom={2}
                    w={64}
                    colorScheme={'orange'}
                    color={useColorModeValue('white', 'black')}
                    borderRadius={10}
                    onClick={() => addPoints(selectedPoint)}
                >Add Points</Button>
            </MenuList>
        </Menu >
    )
}

export default PointsMenu