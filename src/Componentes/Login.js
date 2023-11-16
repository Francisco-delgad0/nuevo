import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const AuthForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ fullName: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de inicio de sesión
    console.log('Login Data:', loginData);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos de registro
    console.log('Signup Data:', signupData);
  };

  const handleClose = () => {
    // Lógica para cerrar el formulario
    // Por ejemplo, si tienes un estado para mostrar/ocultar el formulario
    // setFormVisible(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
      <button type="button" class="btn-close m-2" aria-label="Close"></button>
        <div className="auth-header">
          <h2>{isLogin ? 'Iniciar Sesion' : 'Registrate'}</h2>
        </div>
        <div className="auth-body">
          {isLogin ? (
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                <input type="email" className="form-control"id="email"name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Acceder</button>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Nombre de usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
          )}
        </div>
        <div className="auth-footer">
          <p>
            {isLogin ? "¿No te has registrado? " : '¿Ya tienes cuenta? '}
            <span className="link" onClick={handleFormToggle}>
              {isLogin ? 'Registrate' : 'Inica sesion'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};


export default AuthForm;
