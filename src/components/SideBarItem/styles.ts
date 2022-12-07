import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  font-size: 1.25rem;
  background: transparent;
  width: 50%;
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
  
  &:hover {
    filter: brightness(0.7);;
  }

  & + button {
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--white);
    letter-spacing: 2px;
  }
`