import { Link } from 'react-router-dom';

import logo from '../../assets/Logo_branco.png';
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";


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
            <Link to="/ContactUs">Fale Conosco</Link>
          </ul>
          <ul style={{ display: a === 1 ? 'none' : 'flex' }}>
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
            <FaYoutube className='icons-footer'/>
          </a>
          <a href="" target="_blank" rel="noopener">
            <FaTiktok className='icons-footer'/>
          </a>
          <a href="" target="_blank" rel="noopener">
            <FaInstagram className='icons-footer' />
          </a>
          <a href="" target="_blank" rel="noopener">
            <FaGithub className='icons-footer' />
          </a>
        </nav>
      </section>
    </footer>
  );
}