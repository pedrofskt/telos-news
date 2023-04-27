import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';




export default function SecondCard({text, img}) {
  return (
    <Card sx={{ maxWidth: 216, backgroundColor: "#FEF7FF", padding: "13px" }}>
      <CardMedia
        sx={{ height: 200, borderRadius: "18px" }}
        image={img}
      />
      <CardContent>
        <Typography sx={{fontSize: "20px", lineHeight: "20px", marginTop:"-5rem", color: "#252423"}} variant="body2" color="text.secondary">
          {text}
          
        </Typography>
      </CardContent>

      <CardActions
      sx={{borderTop: "1px solid #CAC4D0", padding: "13px 0px"}}
      >
      </CardActions>
    </Card>
  );
}