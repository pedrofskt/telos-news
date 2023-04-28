import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


import img from './Caminho-19043.png'
import LoginButtonNewsPage from "../LoginButtonNewsPage";
import { Link } from "react-router-dom";


export default function HeaderNewsPage() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{background: "transparent"}}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
            
            <Typography variant="h6" component="div">
              Menu
            </Typography>
          <Typography variant="h6" component="div" sx={{display: "flex", alignItems: "center", gap: "4px"}}>
            <img src={img} alt="Logo" />
            <Link to="/" size="small">Télos</Link>
          </Typography>
          <LoginButtonNewsPage />
        </Toolbar>
      </AppBar>
    </Box>
  );
}