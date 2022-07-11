import styled from "styled-components";

export const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  margin-top: 50px;
  border: none;
  border-radius: 4px;
  transform: ${(p) => p.activButton && "scale(1.2)"};
`;