import instagram from "../img/insta.png";
import linkdIn from "../img/linkdin.png";
import whatsapp from "../img/chat.png";
import youtube from "../img/play.png";
import './styles.css'


export function Icons(){
    return(
        <div>           
                <div className="icons">
                    <img src={instagram} alt="Instagram" />
                    <img src={linkdIn} alt="LinkdIn" />
                    <img src={whatsapp} alt="Whatsapp" />
                    <img src={youtube} alt="youtube" />
                </div>
        </div>
    )
}