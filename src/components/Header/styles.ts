import styled from "styled-components";

export const Container = styled.header`
  background: var(--black);
  top: 0;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    color: var(--white);
  }

  button {
    border: 0;
    background: transparent;
    color: var(--white);
    font-size: 1.2rem;
  }
`