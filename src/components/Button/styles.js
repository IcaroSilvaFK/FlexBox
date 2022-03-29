import styled, { keyframes } from "styled-components";

const buttonAnimate = keyframes`
  0%{
    transform: translateY(-5px);
  }
  50%{
    transform: translateY(10px)
  }
  100%{
    transform: translateY(0)
  }
`;

export const Container = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  color: ${(props) => (props.color ? "#fff" : "#000")};
  font-weight: bold;
  padding: 10px 13px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    animation: 1s ${buttonAnimate} ease-in-out;
  }
`;
