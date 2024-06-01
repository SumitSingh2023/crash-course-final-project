import React, { useContext } from "react"
import {Button, Container, Heading, Input, VStack } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"
import { Authcontext } from "../context/AuthContextProvider"



export default function Login() {
    const { login } = useContext(Authcontext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleClick() {
        try {
            let resp = await axios({
                method: "post",
                url: "https://reqres.in/api/login",
                data: {
                    email,
                    password
                }
            })
            //login(resp?.data?.token)
            console.log(login)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>

            <VStack spacing={5}>
                <Heading>Login</Heading>
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />

                <Input placeholder='Password' type="password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />

                <Button variant={'solid'} colorScheme="green"
                    onClick={handleClick}>Login</Button>

            </VStack>

        </Container>
    )
}

