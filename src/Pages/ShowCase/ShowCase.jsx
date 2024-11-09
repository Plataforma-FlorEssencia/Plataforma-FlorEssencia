import Header from "../../components/Header/Header";
import FooterPreLogin from "../../components/Footer/Footer";
import "./ShowCase.css";

function ShowCase() {
    return (
    <div>

    <div>   
        <Header />
    </div>  
    <div className="consulta">
    <div className="vitrine">
        <div className="vitrine-separado-esquerda"></div>
        <div className="vitrine-separado-direita"></div>

    </div>

    <div className="vitrine">
        <div className="vitrine-separado-esquerda"></div>
        <div className="vitrine-separado-direita"></div>
    </div>
    </div>
    <div>   
        <FooterPreLogin />
    </div> 

    </div>
    )
};

export default ShowCase;