import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import * as AlertActions from "../../store/modules/alert/actions";
import * as LoadingActions from "../../store/modules/loading/actions";

import api from "../../services/api";

import CreatedOng from "../../components/CreatedOng";

export default function Register() {
  const dispatch = useDispatch();
  const [ong, setOng] = useState({});
  const [id, setId] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      dispatch(LoadingActions.setLoading());
      const res = await api.post("ongs", ong);

      dispatch(AlertActions.success("ONG cadastrada com sucesso."));
      dispatch(LoadingActions.closeLoading());
      setId(res.data.id);

      localStorage.setItem("ongId", res.data.id);
    } catch (error) {
      dispatch(AlertActions.error("Erro ao cadastrar ONG."));
    }

    // await api.post("ongs", ong).then(res => {
    //   if (res.status === 200) {
    //     dispatch(AlertActions.success("ONG cadastrada com sucesso."));
    //   }
    // });
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setOng({ ...ong, [name]: value });
  }

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

        {!id ? (
          <form action="" onSubmit={handleRegister}>
            <input
              placeholder="Nome da ONG"
              onChange={handleChange}
              name="name"
              value={ong.name}
            />
            <input
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              name="email"
              value={ong.email}
            />
            <input
              placeholder="WhatsApp"
              onChange={handleChange}
              name="whatsapp"
              value={ong.whatsapp}
            />

            <div className="input-group">
              <input
                type="text"
                placeholder="Cidade"
                onChange={handleChange}
                name="city"
                value={ong.city}
              />
              <input
                type="text"
                placeholder="UF"
                style={{ width: 80 }}
                onChange={handleChange}
                name="uf"
                value={ong.uf}
              />
            </div>

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        ) : (
          <CreatedOng id={id} name={ong.name} />
        )}
      </div>
    </div>
  );
}
