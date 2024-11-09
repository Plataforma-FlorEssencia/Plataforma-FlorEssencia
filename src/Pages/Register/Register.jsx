import React from 'react';
import './Register.css';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import sideImage from '../../assets/mulher-registro.png';
import logo from '../../assets/Logo.png';

function Register() {
  return (
    <div className="login-container container-fluid d-flex align-items-center">
      <div className="row w-100">
        
        <div className="col-md-5 d-none d-md-flex align-items-center justify-content-start p-0">
          <img src={sideImage} alt="Woman working on laptop" className="img-fluid side-image" />
        </div>

        
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <div className="login-form p-4 shadow-sm rounded bg-white">
            <a href="/">
            <img src={logo} alt="Logo" className="logo mb-3" style={{ width: '70px', height: 'auto' }}/>
            </a>
            <h2 className="mb-4">Crie sua Conta</h2>
            
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" placeholder="Nome completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" className="form-control" id="password" placeholder="Senha" />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirme a senha" />
              </div>
              <button type="submit" className="btn btn-pink w-100 mb-3">CRIAR CONTA</button>
              <p className="text-center">
                Já tem uma conta? <a href="/" className="text-decoration-none text-pink">Faça Login</a>
              </p>
            </form>
            <div className="d-flex justify-content-center gap-3 social-login mt-3">
              <FaGoogle className="social-icon" />
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;