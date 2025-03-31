import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/consulta">Consulta</Link></li>
        <li><Link to="/alteracao">Alteração</Link></li>
        <li><Link to="/exclusao">Exclusão</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
