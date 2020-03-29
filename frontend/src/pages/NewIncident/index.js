import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { Container } from './styles';

import api from "../../services/api";

import * as AlertActions from "../../store/modules/alert/actions";
import * as LoadingActions from "../../store/modules/loading/actions";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NewIncident() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newIncidents, setNewIncidents] = useState({});

  const ongId = localStorage.getItem("ongId");

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch(LoadingActions.setLoading());

    await api
      .post("incidents", newIncidents, {
        headers: {
          Authorization: ongId
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch(AlertActions.success("Novo caso adicionado com sucesso!"));
          history.push("/profile");
        }
      })
      .catch(err => {
        if (err) {
          dispatch(AlertActions.error("Erro ao adicionar novo caso."));
        }
      });

    dispatch(LoadingActions.closeLoading());
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setNewIncidents({ ...newIncidents, [name]: value });
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar Novo Caso</h1>
          <p>
            Escreva o caso detalhadamente para encontrar um heroi para resolver
            isso.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form action="" onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Titulo do caso"
            value={newIncidents.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Descricao"
            value={newIncidents.description}
            onChange={handleChange}
          />
          <input
            name="value"
            placeholder="Valor em reais"
            value={newIncidents.value}
            onChange={handleChange}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
