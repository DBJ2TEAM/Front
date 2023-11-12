import React from "react"
import Box from "../atoms/Box"
import { BigText } from "../atoms/Text"
import Button from "../atoms/Button"

const Nav = () => {
    return (
        <nav>
            <Box>
                <BigText>Home</BigText>
                <BigText>About</BigText>
                <BigText>Reserve</BigText>
                <BigText>Contact</BigText>
            </Box>
            <Button onClick={()=>{}}>
                appointment
            </Button>
        </nav>
    )
}

export default Nav