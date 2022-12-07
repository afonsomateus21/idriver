import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  height: 720px;
  margin: 2rem auto;
  /* background-color: red; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    padding: 0.8rem;
  }

  span {
    padding: 0.8rem;
    font-size: 1.5rem;
  }

  div {
    padding: 0.8rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
`

