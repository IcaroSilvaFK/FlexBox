import React from "react";
import { Container } from "./styles";

export function Button({ text, color }) {
  return (
    <Container color={color}>
      <strong>{text}</strong>
    </Container>
  );
}
