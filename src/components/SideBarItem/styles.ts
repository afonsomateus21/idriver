import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  font-size: 1.25rem;
  background: transparent;
  
  &:hover {
    filter: brightness(0.7);;
  }

  & + button {
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }
`