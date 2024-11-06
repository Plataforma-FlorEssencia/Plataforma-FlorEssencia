import { Link } from 'react-router-dom';

import logo from '../../assets/Logo_branco.png';
import instagram from '../../assets/Logo_branco.png';
import tiktok from '../../assets/Logo_branco.png';
import linkedin from '../../assets/Logo_branco.png';
import github from '../../assets/Logo_branco.png';

import './Footer.css';

export default function FooterPreLogin() {
  const a = 1;

  return (
    <footer id='footerPreLogin'>
      <div className='upFooter'></div>
      <section className="footerTop">
        <nav className="linkList">
          <ul>
            <Link to="/About">Sobre</Link>
            <Link to="/apoie">Apoie</Link>
            <Link to="/faleConosco">Fale Conosco</Link>
          </ul>
          <ul style={{display: a === 1 ? 'none' : 'flex'}}>
            <Link to="/conexoes">Conectar</Link>
            <Link to="/perfil">Perfil</Link>
            <Link to="/loja">Loja</Link>
          </ul>
        </nav>
        <figure>
          <img src={logo} className="logo" alt="Logo" />
          <p>Todos os direitos reservados | FloreEssência © 2024 </p>
        </figure>
      </section>
      <div className="breakBar"></div>
      <section className="footerBottom">
        <nav className="linkList">
          <Link to="/termos" className="footer-linkList">Política de Privacidade</Link>
          <Link to="/termos" className="footer-linkList">Termos de Uso</Link>
          
        </nav>
        <nav className="social">
          <a href="" target="_blank" rel="noopener">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="" target="_blank" rel="noopener">
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="" target="_blank" rel="noopener">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="" target="_blank" rel="noopener">
            <img src={github} alt="GitHub" />
          </a>
        </nav>
      </section>
    </footer>
  );
}