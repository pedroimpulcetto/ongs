import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import * as AlertActions from "../../store/modules/alert/actions";
import * as LoadingActions from "../../store/modules/loading/actions";
import ModalDelete from "../../components/ModalDelete";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);
  const [modal, setModal] = useState(false);
  const [activeIncident, setActiveIncident] = useState("");

  const toggle = () => setModal(!modal);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    async function loadIncidents() {
      await api
        .get("profile", {
          headers: {
            Authorization: ongId
          }
        })
        .then(res => setIncidents(res.data));
    }
    loadIncidents();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { Authorization: ongId }
      });
      dispatch(AlertActions.success("Caso deletado com sucesso."));
      toggle();

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      dispatch(AlertActions.error("Erro ao deletar o caso."));
    }
  }

  function handleOpenModal(id) {
    toggle();
    setActiveIncident(id);
  }

  function handleLogout() {
    dispatch(LoadingActions.setLoading());
    localStorage.clear();
    history.push("/");
    dispatch(LoadingActions.closeLoading());
  }

  return (
    <Fragment>
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="Be the hero" />
          <span>Bem vinda, {ongName}</span>

          <Link className="button" to="/incidents/new">
            Cadastrar novo caso
          </Link>
          <button type="button" onClick={handleLogout}>
            <FiPower size={18} color="#e02041" />
          </button>
        </header>

        <h1>Casos Cadastrados</h1>

        <ul>
          {incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRICAO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>{incident.value}</p>

              <button
                type="button"
                onClick={() => handleOpenModal(incident.id)}
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {modal && (
        <ModalDelete
          toggle={toggle}
          onSave={handleDelete}
          record={activeIncident}
        />
      )}
    </Fragment>
  );
}
