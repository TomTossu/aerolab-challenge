import React, { useState } from 'react'
import { Box, Button, Card, CardBody, Divider, Flex, Image, Stack, Text, useToast } from '@chakra-ui/react'
import coin from '../assets/icons/coin.svg'

import { useRedeem, useUser } from '../user/hooks'

function ProductCard({ product }) {
    const [user] = useUser()
    const redeemProduct = useRedeem()
    const [hover, setHover] = useState(false)
    const canBuy = product.cost <= user.points
    const toast = useToast()

    function handleRedeem(product) {
        if (!canBuy) return

        redeemProduct(product)
        toast({
            title: `Redeemed ${product.name}`,
            description: `You've successfully redeemed ${product.name} for ${product.cost} points`,
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom-left'
        })
    }

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
                            bgColor={'cyan.500'}
                            height={'100%'}
                            width={'100%'}
                            opacity={0.7}
                            position={'absolute'}
                        />
                        <Stack spacing={6} zIndex={3}>
                            {canBuy &&
                                <Stack>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                        <Text color={'white'} fontSize={'4xl'} textShadow={'3px 3px 3px black'}>{product.cost}</Text>
                                        <Image h={8} w={8} src={coin} marginTop={2} />
                                    </Stack>

                                    <Button colorScheme={'orange'} onClick={() => handleRedeem(product)}>Redeem Now</Button>
                                </Stack>
                            }
                            {!canBuy &&
                                <Stack>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                                        <Text color={'white'} fontSize={'3xl'} textShadow={'3px 3px 3px black'}>You need {product.cost - user.points}</Text>
                                        <Image h={8} w={8} src={coin} marginTop={1} />
                                    </Stack>
                                    <Text color={'white'} fontSize={'3xl'} textShadow={'3px 3px 3px black'}>more to redeem</Text>
                                </Stack>
                            }
                        </Stack>
                    </Flex>
                }

            </CardBody>
        </Card >
    )
}

export default ProductCard