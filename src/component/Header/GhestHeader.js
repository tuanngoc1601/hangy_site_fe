import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const pages = ["Home", "Contact", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                padding: "5px 15px",
            }}
        >
            <InputBase
                placeholder="What are you looking for?"
                inputProps={{ "aria-label": "search" }}
            />
            <SearchIcon
                sx={{
                    color: "#000",
                    lineHeight: "100%",
                    padding: "4px",
                    ml: 1,
                    opacity: "0.4",
                    cursor: "pointer"
                }}
            />
        </Box>
    );
};

const GhestHeader = () => {
    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: "#fff",
                boxShadow: "0px 10px 30px #f0f0f0",
                zIndex: 105,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Inter",
                            fontWeight: 700,
                            letterSpacing: "0.72px",
                            fontSize: "24px",
                            color: "#000",
                            textDecoration: "none",
                        }}
                    >
                        Exclusive
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            mx: 10,
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    my: 2,
                                    mx: 2,
                                    color: "black",
                                    display: "block",
                                    fontFamily: "Poppins",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Search />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default GhestHeader;
