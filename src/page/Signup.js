import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GhestHeader from "../component/Header/GhestHeader";
import SignUpForm from "../component/Auth/SignUpForm";
import Footer from "../component/Footer/Footer";
import slide_image from "../assets/images/slide_image.png";

const Signup = () => {
    return (
        <>
            <GhestHeader />
            <Container>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={7}>
                        <Box sx={{
                            backgroundImage: `url(${slide_image})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            height: '650px',
                            width: '90%',
                            margin: '0 auto',
                        }}>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box>
                            <SignUpForm />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default Signup;
