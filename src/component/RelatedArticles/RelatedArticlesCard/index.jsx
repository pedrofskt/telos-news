import './styles.css'
import img1 from '../Rectangle-227.png'
import img2 from '../Rectangle-228.png'
import img3 from '../Rectangle-229.png'
import img4 from '../Rectangle-230.png'



export default function RelatedArticlesCard() {
    return (
        <div className="geralCard"> 
            <h1 style={{marginBottom: "5rem"}}>Artigos relacionados</h1>
            <div>
            <div>
                <div className="content">
                <div>
                    <img src={img1} alt="" />
                    <div>
                    <h1 style={{ color: "#44403D"}}>Mercado de trabalho</h1>
                    <p >Como se comportar em uma <br />
                        entrevista de emprego online</p>
                    </div>
                </div>

                <div>
                    <img src={img2} alt="" />
                    <div>
                    <h1 style={{color: "#453D1F"}}>Negócios</h1>
                    <p>Comunicação para venda:<br /> como ajustar seu discurso <br />para o momento?</p>
                    </div>
                </div>

                <div><img src={img3} alt="" />
                    <div>
                    <h1 style={{ color: "#5D4B04"}}>Curiosidade</h1>
                    <p>Comunicação no processo<br />seletivo: como se destacar na <br />entrevista?</p>
                    </div>
                </div>

                <div>
                    <img src={img4} alt="" />
                    <div>
                    <h1 style={{color: "#BD9804"}}>Mercado de trabalho</h1>
                    <p>Mindfulness: como chegar ao<br /> próximo nível na sua carreira?</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}






