import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  position: fixed;
  left: 13rem;
  width: 90%;
`

export const Content = styled.form`
  max-width: 600px;
  margin: 0 auto;
  height: 100%;

  h1 {
    font-size: 1.7rem;
    text-align: center;
    padding-top: 0.5rem ;
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  label {
    text-align: left;
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: var(--black);
    font-size: 14px;
    font-weight: 200;
  }

  button {
    background: var(--black);
    color: white;
    text-transform: uppercase;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 10px;
    width: 100%;
  }
`