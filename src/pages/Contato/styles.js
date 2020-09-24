import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Container = styled.div`
  padding: 5px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

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
    width: 100%;
    max-width: 500px;
    padding: 0 5px;

    form {
      display: flex;
      flex-direction: column;

      input,
      textarea {
        width: auto;
        min-width: 200px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #cccccc;
        margin: 0 0 5px 0;
      }

      textarea {
        height: 100px;
      }

      button {
        -moz-box-shadow: inset 0px 34px 0px -15px #b54b3a;
        -webkit-box-shadow: inset 0px 34px 0px -15px #b54b3a;
        box-shadow: inset 0px 34px 0px -15px #b54b3a;
        background-color: #a73f2d;
        border: 1px solid #241d13;
        border-radius: 3px;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        padding: 9px 23px;
        text-decoration: none;
        text-shadow: 0px -1px 0px #7a2a1d;
      }

      button:hover {
        background-color: #b34332;
      }

      button:active {
        position: relative;
        top: 1px;
      }

      span {
        font-size: 12px;
        font-weight: bold;
        color: #b71c1c;
        padding: 0 0 8px 0;
      }
    }
  }

  div {
    ul {
      li {
        list-style: none;
        padding: 0 0 10px 0;

        div {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  p {
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 5px;
  }
`;
