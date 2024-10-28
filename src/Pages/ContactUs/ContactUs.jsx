import Header from "../../components/Header/Header";
import './ContactUs.css'
import florRosa from '../../assets/FlorRosa.png'
import FooterPreLogin from "../../components/Footer/Footer";


function ContactUs() {
    return (
        <div>
            <Header />

            <div className="section-hero">
                <div class="top-0 mt-4 ">
                    <h1 class="display-12 fw-bolder text-capitalize">Compartilhe o que você pensa com a gente</h1>
                </div>
            </div>

            <form className="forms-contactUs">
                <h2 className='title-yellow-contactUs'>Fale Conosco</h2>
                <h3 className='subtitle-contactUs'>Como podemos te ajudar?</h3>

                <div className='align-row-contactUs'>
                    <div className='align-column-contactUs'>
                        <input type="text" className='inputContactUs' name="name" placeholder="Nome Completo" required />
                        <div className='align-row-contactUs'>
                            <input type="text" className='inputSmallContactUs' name="email" placeholder="Email" required />
                            <input type="text" className='inputSmallContactUs' name="phone" placeholder="Telefone" required />
                        </div>
                        <input type="text" name="subject" className='inputContactUs' placeholder="Assunto" required />
                        <textarea className='textField-contactUs' name="message" placeholder="Mensagem" required></textarea>
                        <div className='align-btn-contactUs'>
                            <input className='submit-contactUs' value="Enviar" type="submit" />
                        </div>
                    </div>
                    <img className='img-principal-contactUs' src={florRosa} alt="" />
                </div>
            </form>

            <FooterPreLogin />
        </div>
    )
}

export default ContactUs;
