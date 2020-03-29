import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
`;

export const Content = styled.div`
  display: grid;
  justify-items: center;

  p {
    margin-top: 10px;
    font-size: 16pt;
    color: #737380;

    strong {
      font-size: 24pt;
      font-weight: bold;
    }
  }
`;
