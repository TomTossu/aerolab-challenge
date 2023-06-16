import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { SORT_VALUES } from '../products/constants/constants'

const SORT_OPTIONS = {
    homescreen: [SORT_VALUES.LowestPrice, SORT_VALUES.HighestPrice],
    history: [SORT_VALUES.NewestFirst, SORT_VALUES.OldestFirst],
}

function SortByFilter({ active, onChange, screen }) {
    return (
        <Stack direction={'row'} spacing={6} alignItems={'center'} justifyContent={'center'}>
            <Text color={'gray.500'}>Sort by:</Text>
            <Stack direction={'row'} spacing={4}>
                {SORT_OPTIONS[screen].map((filter) => (
                    <Box
                        key={filter}
                        fontWeight={500}
                        color={active === filter ? 'white' : 'gray.600'}
                        bgColor={active === filter ? "primary.500" : "gray.100"}
                        borderRadius={9999}
                        paddingX={6}
                        paddingY={2}
                        cursor={'pointer'}
                        onClick={() => onChange(active === filter ? '' : filter)}
                    >
                        {filter}
                    </Box>
                ))}
            </Stack>
        </Stack>
    )
}

export default SortByFilter