import React from "react";
import img from './banner.png'
import CardMedia from '@mui/material/CardMedia';
import logo from './Rectangle233.png'
import './styless.css'


export default function Banner(){
    return(
        <> 
        <CardMedia component="img" sx={{ display:"flex", alignItems:"center", width: "100%", height: "80vh", objectFit: "cover", position: "absolute", top: "0", zIndex: "-1"}} image={img} alt="Banner"/>
      <div className="container1">
        <h3>Mercado de trabalho</h3>
        <h2>Burnout: você sabe lidar com o</h2> 
        <h2>estomago profissional</h2>
            <div className="content1">
                <img src={logo} alt="" />
                <h5>jhon Doe</h5>
                    <div className="content2">
                        <h5>tempo de leitura: <strong>10 minutos</strong></h5>
                    </div>
            </div>
      </div>
      </>
    )
}