import { Select } from '@chakra-ui/react'
import React from 'react'

import { CATEGORIES_VALUES } from '../constants/constants'

const FILTERS = [CATEGORIES_VALUES.AllProducts, CATEGORIES_VALUES.Audio, CATEGORIES_VALUES.Cameras, CATEGORIES_VALUES.Drones,
CATEGORIES_VALUES.Gaming, CATEGORIES_VALUES.Laptops, CATEGORIES_VALUES.MonitorsTv, CATEGORIES_VALUES.PCAccesories,
CATEGORIES_VALUES.PCAccessories, CATEGORIES_VALUES.PhoneAccessories, CATEGORIES_VALUES.Phones, CATEGORIES_VALUES.SmartHome, CATEGORIES_VALUES.TabletsEreaders]



function CategoryFilter({ onChange }) {
    return (
        <Select maxWidth={'sm'} cursor={'pointer'} onChange={(event) => onChange(event.target.value)}>
            {FILTERS.map((category, index) => (
                <option key={`${category}_${index}`} value={category}>{category}</option>
            ))}
        </Select>
    )
}

export default CategoryFilter