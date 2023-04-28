import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

export default function MiddleCard({text, img}) {

  return (
    <Card sx={{ display: 'flex', alignItems: "flex-end", backgroundColor: "#FEF7FF;", borderRadius: "38px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: "0px 140px 0px 40px" }}>
        <Link to="/Noticia" style={{ padding: "13px", backgroundColor: "#6750A4", color: "white", fontWeight: "bold", borderRadius: "140px", textDecoration: "none"}} href="#contained-buttons">Ler Agora</Link>
        <Box>
          <h1>{text}</h1>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 570 }}
        image={img}
        alt="Middle Card"
      />
    </Card>
  );
}