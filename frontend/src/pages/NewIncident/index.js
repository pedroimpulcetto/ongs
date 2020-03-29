import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Formulario } from "./styles";
import {
  Button,
  BackLink,
  Sessao,
  Container,
  Content
} from "../../styles/utils";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";
import { FiArrowLeft } from "react-icons/fi";
import * as AlertActions from "../../store/modules/alert/actions";
import * as LoadingActions from "../../store/modules/loading/actions";

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
    <Container>
      <Content>
        <Sessao>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar Novo Caso</h1>
          <p>
            Escreva o caso detalhadamente para encontrar um heroi para resolver
            isso.
          </p>

          <BackLink to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </BackLink>
        </Sessao>

        <Formulario action="" onSubmit={handleSubmit}>
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

          <Button type="submit">Cadastrar</Button>
        </Formulario>
      </Content>
    </Container>
  );
}
