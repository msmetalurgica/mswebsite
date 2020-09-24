import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-between;
  padding-left: 0%;
  padding-right: 0%;
  padding-top: 80px;
  border-bottom: 1px solid black;

  @media only screen and (max-width: 600px) {
    padding-top: 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #b71c1c;

  h1 {
    text-align: center;
    color: #ffebee;
  }
`;
