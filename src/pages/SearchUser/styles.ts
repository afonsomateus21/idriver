import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  position: absolute;
  left: 13rem;
  width: 88%;

  form {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    input {
      display: block;
      box-sizing: border-box;
      width: 500px;
      border-radius: 4px;
      border: 1px solid black;
      padding: 10px 15px;
      margin-bottom: 10px;
      font-size: 14px;
    }
     
    button {
      background: var(--black);
      margin-left: 10px;
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      font-weight: 100;
      width: 100px;
      height: 40px;
    }
  }
`