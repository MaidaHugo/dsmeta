import logo from "../../assets/img/logo.svg";

import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por&nbsp;
          <a href="https://github.com/MaidaHugo" target="_blank">
            @MaidaHugo
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
