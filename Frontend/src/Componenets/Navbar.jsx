import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink } from "@chakra-ui/react"
import { Flex, Box } from "@chakra-ui/react";
import { AuthContext} from "../context/AuthContextProvider";
import { useContext } from "react";



export default function Navbar() {
    const {logOut} = useContext(AuthContext)

    const link = [
        {
            to: "/",
            label: "HOME"
        },
        {
            to: "/about",
            label: "ABOUT"
        },
        {
            to: "/contact",
            label: "CONTACT"
        },
        {
            to: "/login",
            label: "LOGIN"
        },
    ]
    return (
        <Box bg={"blue.200"}>
            <Flex
                align={"center"}
                justify={"space-around"}
                height={20}>
                {link?.map((links) => (
                    <ChakraLink
                        color={"red.600"}
                        as={ReactRouterLink}
                        key={links.to}
                        to={links.to}>
                        {links.label}
                    </ChakraLink>
                ))}
                <Button variant={outline} color={red} onClick={logOut}>LOGOUT</Button>
            </Flex>
        </Box>

    )
}