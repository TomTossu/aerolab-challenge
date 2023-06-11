import React, { createContext, useEffect, useState } from 'react'
import { fetchUser } from './api'
import { Center, CircularProgress } from '@chakra-ui/react'

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

    if (!user || status === "pending") {
        return (
            <Center>
                <CircularProgress isIndeterminate ></CircularProgress>
            </Center>
        )
    }

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider as Provider }