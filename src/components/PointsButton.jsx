import { Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function PointsButton({ point, selectedPoint, setSelectedPoint }) {
    return (
        <Button
            colorScheme={useColorModeValue(selectedPoint === point ? 'cyan' : 'gray', selectedPoint === point ? 'cyan' : 'gray')}
            color={useColorModeValue(selectedPoint === point ? 'white' : 'black', selectedPoint === point ? 'black' : 'white')}
            paddingY={2} paddingX={5}
            marginY={3} marginX={1}
            borderRadius={10}
            cursor={'pointer'}
            onClick={() => setSelectedPoint(point)}
            value={point}
        >
            {point}
        </Button>
    )
}

export default PointsButton