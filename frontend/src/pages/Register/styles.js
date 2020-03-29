import styled from "styled-components";

export const Formulario = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }

  div {
    display: flex;

    input + input {
      margin-left: 8px;
    }
  }
`;
