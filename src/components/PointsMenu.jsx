import React, { useState } from 'react'

import { Button, Divider, Image, Menu, MenuButton, MenuList, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import coin from '../assets/icons/coin.svg'
import { POINTS_VALUES } from '../products/constants/constants'

const FILTERS = [POINTS_VALUES.First, POINTS_VALUES.Second, POINTS_VALUES.Third]

function PointsMenu({ points, addPoints }) {
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
                <Text padding={4} maxWidth={'100%'} margin={1}>Please select how many coins you want to add to your account:</Text>
                <Divider borderColor={'gray.800'} w={'14rem'} />
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} margin={2}>
                    {FILTERS.map((point) => (
                        <Button
                            key={point}
                            colorScheme={selectedPoint === point ? 'cyan' : 'gray'}
                            color={selectedPoint === point ? 'white' : 'black'}
                            paddingY={2} paddingX={5}
                            marginY={3} marginX={1}
                            borderRadius={10}
                            cursor={'pointer'}
                            onClick={() => setSelectedPoint(point)}
                            value={point}
                        >
                            {point}
                        </Button>
                    ))}
                </Stack>
                <Button
                    alignItems={'center'} justifyContent={'center'}
                    w={64}
                    colorScheme='orange'
                    color={'white'}
                    borderRadius={10}
                    onClick={() => addPoints(selectedPoint)}
                >Add Points</Button>
            </MenuList>
        </Menu >
    )
}

export default PointsMenu