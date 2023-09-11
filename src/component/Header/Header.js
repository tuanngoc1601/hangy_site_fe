import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSelector } from "react-redux";

const pages = ["Home", "Contact", "About"];

const Search = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                padding: "5px 15px",
                mx: 2,
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
                    cursor: "pointer",
                }}
            />
        </Box>
    );
};

const Header = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
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
                    {user ? (
                        <>
                            <Box sx={{ mx: 1, cursor: "pointer" }}>
                                <NotificationsNoneOutlinedIcon
                                    sx={{
                                        color: "black",
                                        display: "block",
                                        fontSize: "28px",
                                        fontFamily: "Poppins",
                                    }}
                                />
                            </Box>
                            <Box sx={{ mx: 1, cursor: "pointer" }}>
                                <ShoppingCartOutlinedIcon
                                    sx={{
                                        color: "black",
                                        display: "block",
                                        fontSize: "28px",
                                        fontFamily: "Poppins",
                                    }}
                                />
                            </Box>
                            <Box sx={{ mx: 1, cursor: "pointer" }}>
                                <AccountCircleOutlinedIcon
                                    sx={{
                                        color: "black",
                                        display: "block",
                                        fontSize: "28px",
                                        fontFamily: "Poppins",
                                    }}
                                />
                            </Box>
                        </>
                    ) : (
                        ""
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
