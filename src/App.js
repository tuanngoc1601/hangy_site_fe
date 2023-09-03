import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Signup from "./page/Signup";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div
                style={{
                    backgroundColor: "#fff",
                    display: "flex",
                    position: "relative",
                    minHeight: "100vh",
                    flexDirection: "column",
                }}
            >
                <Box style={{
                    width: '100%',
                    margin: '0 auto'
                }}>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<Signup />} />
                    </Routes>
                </Box>
            </div>
        </div>
    );
}

export default App;
