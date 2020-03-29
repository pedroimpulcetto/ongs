import React from "react";
import { FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";
import { Button } from "../../styles/utils";

export default function CreatedOng({ name, id }) {
  return (
    <Container>
      <Content>
        <FiSun size={40} color="#e02041" />
        <p>{name}, sua ONG foi cadastrada com Sucesso!</p>
        <p>Guarde com carinho seu ID para realizar o login.</p>
        <p>
          Seu ID: <strong>{id}</strong>
        </p>
      </Content>
      <Link to="/" className="back-link" kj>
        <Button type="submit">Fazer Login</Button>
      </Link>
    </Container>
  );
}
