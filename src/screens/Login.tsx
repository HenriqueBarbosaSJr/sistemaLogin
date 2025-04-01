import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

import './login.css';
import { api } from "../api/Api";

const Login =  () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('authToken'));

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }


    try {
      let acesso = {
        email:'joao@email.com',
        password: '123mudar'
      };
  
      const response = await api.post('userauth', acesso);
      console.log(response.data);
      const authToken = response.data.token;
      
      if (authToken) {
        Cookies.set('authToken', authToken, { expires: 1 });
        setIsAuthenticated(true);
      }
    } catch (error) {
      setError("Falha no login. Verifique suas credenciais.");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/menu" />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        {error && <p className="login-error">{error}</p>}
        <div className="login-field">
          <FaUser className="login-icon" />
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="login-field">
          <FaLock className="login-icon" />
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button onClick={handleLogin} className="login-button">Entrar</button>
      </div>
    </div>
  );
};

const Menu = () => {
  const handleLogout = () => {
    Cookies.remove('authToken');
    window.location.href = "/";
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Menu</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <nav>
        <ul>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li><Link to="/consulta">Consulta</Link></li>
          <li><Link to="/alteracao">Alteração</Link></li>
          <li><Link to="/exclusao">Exclusão</Link></li>
        </ul>
      </nav>
    </div>
  );
};

const Cadastro = () => <h2>Cadastro de Usuário</h2>;
const Consulta = () => <h2>Consulta de Usuário</h2>;
const Alteracao = () => <h2>Alteração de Usuário</h2>;
const Exclusao = () => <h2>Exclusão de Usuário</h2>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/alteracao" element={<Alteracao />} />
        <Route path="/exclusao" element={<Exclusao />} />
      </Routes>
    </Router>
  );
};

export default App;
