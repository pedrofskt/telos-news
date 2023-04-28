import React from "react";
import image2 from "../img/image-49.png";
import image3 from "../img/image-50.png";
import image4 from "../img/image-51.png";
import image5 from "../img/image-52.png";
import image6 from '../img/Rectangle-235.png'
import image7 from '../img/Rectangle-262.png'
import image8 from '../img/start.png';
import image9 from '../img/vision.png'
import './styles.css'

export function CardNoticia() {
    return(
        <div>
               <div className="contentCard">
                     <h3>Leia também</h3>
                   
                    <div className="cards">              
                        <img src={image2} alt="" />
                            <div>
                                <h4 style={{color: "#517BB3"}}>Mercado de trabalho</h4>
                                <h5>Gamificação: saiba como ela pode…</h5>
                            </div>                
                    </div> 

                    <div className="cards">
                        <img src={image3} alt="" />
                        <div>
                            <h4 style={{color: "#958186"}}>Negócios</h4>
                            <h5>Por que trabalhar com propósito ?</h5>
                        </div>
                    </div>

                    <div className="cards">
                        <img src={image4} alt="" />
                        <div>
                            <h4 style={{color: "#353A3E"}}>Educação</h4>
                            <h5>Por que contratar treinamentos…</h5>
                        </div>
                    </div>

                    <div className="cards">
                        <img src={image5} alt="" />
                        <div>
                            <h4 style={{color: "#353A3E"}}>Educação</h4>
                            <h5>O que levar em consideração…</h5>
                        </div>
                    </div>
                
                        <div className="cardBanner">
                            <img style={{margin: "70px 0px"}} src={image6} alt="cardbanner" />
                            <h2>Se interessou pelo assunto? </h2>
                            <p>Então dá uma olhada nesse curso gratuito que a Télos te oferece:</p>
                        </div>
                
                        <div className="fotoBanner">
                            <img style={{marginTop: "-3rem"}} src={image7} alt="foto" />
                            <h2>Se interessou pelo assunto? </h2>
                                    <div className="start" style={{display: "flex", alignItems: "center", gap: "11px"}}>
                                        <img src={image8} alt="start" />
                                        <span>8 de 10</span>
                                    </div>
                            <p>Você irá sair sabendo sobre liderança e comunicação.</p>
                                    <div className="see_details">
                                        <img src={image9} alt="" />
                                        <a href="#">Ver detalhes</a>
                                    </div>
                        </div>
                </div>
        
        </div>

    )
}






