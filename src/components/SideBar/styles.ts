import styled from "styled-components";

export const Container = styled.aside`
  height: 100%;
  width: 13rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: var(--black);
  overflow-x: hidden;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    color: var(--white);
    font-size: 1.2rem;
  }
`
