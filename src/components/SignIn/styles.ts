import styled from "styled-components";

export const Button = styled.button`
  width: 20rem;
  padding: 0.8rem 1.5rem;
  height: 4rem;
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  transition: filter 0.2s;
  color: black;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    filter: brightness(0.9);
  }  
`