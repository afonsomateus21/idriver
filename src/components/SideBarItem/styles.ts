import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  font-size: 1.25rem;
  background: transparent;
  color: var(--white);

  &:hover {
    filter: brightness(0.9);;
  }

  & + button {
    margin-top: 2rem;
  }
`