import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
  div {
    h2 {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      letter-spacing: -1px;
      color: #6b46c1;
    }
  }
  nav {
    ul {
      display: flex;
      list-style: none;
      gap: 10px;
      li {
        a {
          padding: 10px;
          color: inherit;
          text-decoration: none;
          color: #fff;
          @media (max-width: 500px) {
            font-size: 12px;
            color: #000;
          }
        }
      }
    }
  }
`;
