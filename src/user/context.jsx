import React, { createContext, useEffect, useState } from 'react'
import { fetchUser, addPoints } from './api'
import { Center, CircularProgress } from '@chakra-ui/react'
import { redeemProduct } from '../products/api'

const UserContext = createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState()
    const [status, setStatus] = useState('pending')

    useEffect(() => {
        const fetchUserData = (async () => {
            const result = await fetchUser();
            setUser(result)
            setStatus("resolved")
        })

        fetchUserData();
    }, [])

    async function handleAddPoints(amount) {
        if (!user) return;

        return addPoints(amount).then(() => {
            setUser({ ...user, points: user.points + amount })
        })
    }


    async function handleRedeemProduct(product) {
        if (!user) return

        return redeemProduct(product._id).then(() => {
            setUser({ ...user, points: user.points - product.cost })
        })
    }

    if (!user || status === "pending") {
        return (
            <Center>
                <CircularProgress isIndeterminate ></CircularProgress>
            </Center>
        )
    }

    const state = {
        user,
    }
    const actions = {
        addPoints: handleAddPoints,
        redeemProduct: handleRedeemProduct,
    }

    return (
        <UserContext.Provider value={{ state, actions }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider as Provider }