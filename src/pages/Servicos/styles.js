import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  padding: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;

  h2 {
    text-align: center;
    font-weight: bold;
    color: #b71c1c;
    padding: 0 0 15px 0;

    @media only screen and (max-width: 600px) {
      padding-top: 10px;
    }
  }

  div {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 0 0 15px 0;

      li {
        font-size: 15px;
        font-weight: bold;
        list-style: none;
        padding: 0 0 10px 0;

        span {
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
  }
`;

export const DivUL = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
}

  div {
    padding: 0 5px;
  }
`;
