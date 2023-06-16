import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { formatDates } from '../utils/utils';

function HistoryCard({ product }) {
    return (
        <Card direction={'row'} overflow='hidden'>
            <Image
                objectFit='contain'
                maxW={48}
                src={product.img.url}
                alt={`${product.category} - ${product.name}`}
            />

            <Stack textAlign={'left'}>
                <CardBody>
                    <Heading size='lg'>{product.name}</Heading>

                    <Text paddingY={2} fontSize={20}>
                        Category: {product.category}
                    </Text>
                    <Text paddingY={2} fontSize={20}>
                        Redeemed on: {formatDates(product.createDate)}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    )
}

export default HistoryCard