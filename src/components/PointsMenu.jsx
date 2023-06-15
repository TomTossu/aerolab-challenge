import React, { useState } from 'react'

import { Button, Divider, Image, Menu, MenuButton, MenuList, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import add from '../assets/icons/add.svg'
import { POINTS_VALUES } from '../products/constants/constants'
import PointsButton from './PointsButton'

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
                    bgColor={'gray.200'}
                    borderRadius={5}
                    paddingY={0.7}
                    paddingX={0.7}
                >
                    <Image h={6} w={6} src={add} />
                </Stack>
            </MenuButton>
            <MenuList display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'18rem'}>
                <Text padding={3} maxWidth={'100%'} >Please select how many coins you want to add to your account:</Text>
                <Divider borderColor={useColorModeValue('black', 'white')} w={'16rem'} />
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} margin={2} >
                    {FILTERS.map((point) => (
                        <PointsButton key={point} point={point} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint} />
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