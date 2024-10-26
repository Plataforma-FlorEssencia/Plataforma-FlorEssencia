import React from 'react';
import './Login.css';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import sideImage from '../../assets/MulherComputador.png';
import logo from '../../assets/Logo.png';

function Login() {
  return (
    <div className="login-container container-fluid d-flex align-items-center">
      <div className="row w-100">
        {/* Formulário - Coluna à esquerda (55% da tela) */}
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <div className="login-form p-4 shadow-sm rounded bg-white">
            <img src={logo} alt="Logo" className="logo mb-3" />
            <h2 className="mb-4">Faça o Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" className="form-control" id="password" placeholder="Senha" />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Lembre-se de mim</label>
                </div>
                <a href="/" className="text-decoration-none">Esqueceu a senha?</a>
              </div>
              <button type="submit" className="btn btn-pink w-100 mb-3">FAZER LOGIN</button>
              <p className="text-center">
                Não tem uma conta? <a href="/" className="text-decoration-none text-pink">Registrar-se</a>
              </p>
            </form>
            <div className="d-flex justify-content-center gap-3 social-login mt-3">
              <FaGoogle className="social-icon" />
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
            </div>
          </div>
        </div>

        
        <div className="col-md-5 d-none d-md-flex align-items-center justify-content-end p-0">
          <img src={sideImage} alt="Woman working on laptop" className="img-fluid side-image" />
        </div>
      </div>
    </div>
  );
}

export default Login;
