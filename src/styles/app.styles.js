import styled from "styled-components";

export const Container = styled.div`
  background-color: #9f7aea;
  width: 750px;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  border-bottom-left-radius: 250px;
  @media (max-width: 500px) {
    display: none;
  }
`;
