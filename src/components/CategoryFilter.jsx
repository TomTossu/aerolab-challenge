import { Select, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { CATEGORIES_VALUES } from '../products/constants/constants'

const categories = [...new Set(Object.values(CATEGORIES_VALUES))]

function CategoryFilter({ onChange }) {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} w={'sm'}>
            <Text color={'gray.500'} w={28}>Filter by:</Text>
            <Select maxWidth={'sm'} cursor={'pointer'} onChange={(event) => onChange(event.target.value)}>
                {categories.map((category, index) => (
                    <option key={`${category}_${index}`} value={category}>{category}</option>
                ))}
            </Select>
        </Stack>

    )
}

export default CategoryFilter