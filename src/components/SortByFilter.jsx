import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { FILTERS_VALUES } from '../products/constants/constants'

const FILTERS = [FILTERS_VALUES.MostRecent, FILTERS_VALUES.LowestPrice, FILTERS_VALUES.HighestPrice]

function SortByFilter({ active, onChange }) {
    return (
        <Stack direction={'row'} spacing={6} alignItems={'center'} justifyContent={'center'}>
            <Text color={'gray.500'}>Sort by:</Text>
            <Stack direction={'row'} spacing={4}>
                {FILTERS.map((filter) => (
                    <Box
                        key={filter}
                        fontWeight={500}
                        color={active === filter ? 'white' : 'gray.600'}
                        bgColor={active === filter ? "primary.500" : "gray.100"}
                        borderRadius={9999}
                        paddingX={6}
                        paddingY={2}
                        cursor={'pointer'}
                        onClick={() => onChange(filter)}
                    >
                        {filter}
                    </Box>
                ))}
            </Stack>
        </Stack>
    )
}

export default SortByFilter