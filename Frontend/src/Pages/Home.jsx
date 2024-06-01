import React from "react"
import { Box, Heading, Button, useToast, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()
    const toast = useToast()

    function handleClick() {

        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 900,
            isClosable: true,
        })
        alert('hello')
        navigate('/about')
    }
    return (
        <>
            <VStack>
                <Heading>Home</Heading>
                <Button colorScheme='green' onClick={handleClick}>Click Me</Button>
            </VStack>
        </>
    )
}


