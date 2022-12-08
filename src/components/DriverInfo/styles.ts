import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  height: 900px;
  margin: 2rem auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h1 {
    padding: 0.8rem;
  }

  span {
    padding: 0.8rem;
    font-size: 1.5rem;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
    height: 80%;

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
  }
`
export const ButtonContainer = styled.div`
  padding: 0.8rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`

