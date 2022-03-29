import React from "react";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <h2>FlexBox</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
