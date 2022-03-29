import React from "react";

import { Content } from "./components/Content";
import { Header } from "./components/Header";

import { Container } from "./styles/app.styles";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Container />
    </>
  );
}

export default App;
