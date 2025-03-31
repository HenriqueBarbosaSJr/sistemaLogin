import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Menu</h2>
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

export default Menu;
