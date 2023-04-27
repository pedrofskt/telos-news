import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './image-40.png'

export default function FirstCard() {
  return (
    <Card sx={{ width: 628.67, height: 685, backgroundColor: "#F7F2FA", padding: "13px 13px 28px 15px", boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);" }}>
      <CardMedia
        sx={{ height: 390, borderRadius:"10px"}}
        image={img}
      />
      <CardContent>
        <Typography sx={{display: "flex", justifyContent:"start"}} gutterBottom variant="h5" component="div">
          Tecnologia
        </Typography>
        <Typography sx={{fontSize: "20px", lineHeight: "10px", margin: "60px 0px"}} variant="body2" color="text.secondary">
          <p>Entenda como a tecnologia vem alterando os mais</p>
          <p>diversos tipo de relações pessoais e profissionais</p>
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent:"end", gap: "2rem", marginRight: "26px"}}>
        <Button sx={{ color: "#6750A4", padding: "17px 43px", fontWeight: "bold", borderRadius: "180px", border: "1px solid #CAC4D0" }} size="small">Saiba mais</Button>
        {/*criar link */}
      </CardActions>
    </Card>
  );
}