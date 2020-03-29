import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import api from "../../services/api";

import * as AlertActions from "../../store/modules/alert/actions";
import * as LoadingActions from "../../store/modules/loading/actions";

export default function Logon() {
  const ongId = localStorage.getItem("ongId");

  const dispacth = useDispatch();
  const [id, setId] = useState(ongId);
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      dispacth(LoadingActions.setLoading());
      const res = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", res.data.name);

      history.push("/profile");
    } catch (error) {
      dispacth(AlertActions.error("Erro ao tentar fazer logon."));
    }

    dispacth(LoadingActions.closeLoading());
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form action="" onSubmit={handleLogin}>
          <h1>Faca seu Logon</h1>

          <input
            type="text"
            placeholder="Sua ID"
            onChange={e => setId(e.target.value)}
            name="id"
            value={ongId ? id : ""}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Nao tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
