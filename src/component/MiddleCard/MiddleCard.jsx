import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function MiddleCard({text, img}) {

  return (
    <Card sx={{ display: 'flex', alignItems: "flex-end", backgroundColor: "#FEF7FF;", borderRadius: "38px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: "0px 140px 0px 40px" }}>
        <Box>
          <h1>{text}</h1>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 570 }}
        image={img}
        alt="Live from space album cover"
      />
    </Card>
  );
}