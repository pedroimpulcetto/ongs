import React from "react";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Nao tenho cadastro
          </Link>
        </section>

        <form action="">
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
