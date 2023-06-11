import React, { useContext, useState } from 'react'
import { Box, Button, Card, CardBody, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'

import { UserContext } from '../../user/context'

function ProductCard({ product }) {
    const { user } = useContext(UserContext)
    const [hover, setHover] = useState(false)

    const canBuy = product.cost <= user.points

    return (
        <Card opacity={canBuy ? 1 : 0.5} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
            <CardBody>
                <Image objectFit={'contain'} src={product.img.url} alt={`${product.category} - ${product.name}`}></Image>
                <Divider />
                <Stack alignItems={'flex-start'} gap={0} paddingTop={4}>
                    <Text color={'gray.400'}> {product.category} </Text>
                    <Text> {product.name} </Text>
                </Stack>

                {hover &&
                    <Flex
                        alignItems={'center'}
                        justifyContent={'center'}
                        position={'absolute'}
                        height={'100%'}
                        width={'100%'}
                        top={0}
                        left={0}
                        zIndex={2}>
                        <Box
                            bgColor={'orange'}
                            height={'100%'}
                            width={'100%'}
                            opacity={0.7}
                            position={'absolute'}
                        />
                        <Stack spacing={6} zIndex={3}>
                            {canBuy && <Button>Redeem Now</Button>}
                            {!canBuy && <Text color={'white'} fontSize={'3xl'}>You need {product.cost - user.points} points to redeem</Text>}
                        </Stack>
                    </Flex>
                }

            </CardBody>
        </Card>
    )
}

export default ProductCard