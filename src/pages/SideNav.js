
import { Box, Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";
import Button2 from '../components/Button2';

const SideNav = () => {

    const buttonFunction = (e) => {
        console.log("first", e.target)
    }
    const buttonFunction1 = (e) => {
        console.log("first", e.target)
    }
    const buttonFunction2 = (e) => {
        console.log("first", e.target)
    }
    const buttonFunction3 = (e) => {
        console.log("first", e.target)
    }
    const buttonFunction4 = (e) => {
        console.log("first", e)
    }

    return (
        <div>
            <Container className='bg-success' sx={{ maxWidth: "220px", height: "800px", }}>
                <Box sx={{ py: "40px" }}>
                    name image
                </Box>
                <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <button onClick={(e) => { buttonFunction(e) }}>
                        raju
                    </button>


                    <Box>
                        <Link to="/"> <Button2 name={"Home"} /> </Link>
                    </Box>
                    <Box>
                        <Link to="/Dashboard/Users"> <Button2 name={"Users"} color={"error"} variants={'text'} /></Link>
                    </Box>
                    <Box>
                        <Link to="/Dashboard/Experts"> <Button2 name={"Experts"} color={"error"} variants={'text'} /></Link>
                    </Box>
                    <Box>
                        <Link onClick={(e) => { buttonFunction2(e) }} to="/Dashboard/Experts"> <Button2 name={"Call History"} color={"error"} variants={'text'} /></Link>
                    </Box>
                    <Box>
                        <Link onClick={(e) => { buttonFunction3(e) }} to="/Dashboard/Experts"> <Button2 name={"PayoutRequests"} color={"error"} variants={'text'} /></Link>
                    </Box>
                    <Box>
                        <Button2 onClick={(e) => { buttonFunction4(e) }} name={"Specialization"} color={"error"} variants={'text'} />
                    </Box>


                </Stack>

            </Container>

        </div>
    )
}

export default SideNav