import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 1000px;
  margin: auto;
  gap: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  section {
    img {
      width: 560px;
      @media (max-width: 500px) {
        width: 250px;
      }
    }
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 500px) {
    align-items: center;

    width: 100%;
  }
  h1 {
    width: 350px;
    font-size: 45px;
    color: #6b46c1;
    @media (max-width: 500px) {
      text-align: center;
    }
  }
  div .containerContent {
    width: 400px;
    @media screen and (max-width: 500px) {
      width: 100%;
      padding: 10px;
      text-align: center;
    }
  }
  .containerContent {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #4a5568;
  }
  .containerButton {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
/*

*/
