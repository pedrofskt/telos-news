import FirstCard from "../../component/FirstCard/FirstCard";
import SecondCard from "../../component/SecondCard/SecondCard";
import img from "../../component/SecondCard/image-43.png"
import img2 from "../../component/SecondCard/image-42.png"
import { Header } from "../../component/Header/Header";
import BottomCard from "../../component/BottomCard/BottomCard";
import cardTertiary from '../../component/BottomCard/Rectangle-228.png'
import cardSegundary from '../../component/BottomCard/Rectangle-229.png'
import cardPrimary from '../../component/BottomCard/Rectangle-227.png'
import img3 from '../../component/MiddleCard/image-48.png'
import img4 from '../../component/MiddleCard/image-46.png'
import MiddleCard from "../../component/MiddleCard/MiddleCard";
import './styles.css'

export function Home() {
    return (
      <div className="App">
            <Header/>
            <div className="scrollbar">
                    <div className="container">
                        <div className="division">
                            <FirstCard/>
                            <div className="content">
                                <SecondCard 
                                text="Por que trabalhar com propósito ?"
                                img={img}
                                />
                                <SecondCard 
                                text="3 Tendência sobre o futuro do trabalho"
                                img={img2}
                                />
                            </div>
                        </div>
                    </div>
                
                    <div className="middleCard">
                        <MiddleCard
                            text="Negócios"
                            img={img3}
                        />
                    </div>
                    <div className="middleCard">
                        <MiddleCard
                            text=""
                            img={img4}
                        />
                    </div>

                    <div className="bottomCard">
                        <BottomCard
                        title = " Mercado de Trabalho"
                        image={cardPrimary}
                        description= "Como se comportar em uma entrevista online"
                        />
                        <BottomCard
                        title = " Mercado de Trabalho"
                        image={cardSegundary}
                        description= "Como se destacar nas entrevista online"
                        />
                        <BottomCard
                        title = " Negócios"
                        image={cardTertiary}
                        description= " Comunicação para venda: como ajustar seu discurso para o momento"
                        />
                    </div>
            </div>
      </div>
    );
  }
  

