import React from "react";

import { Container, ContainerContent } from "./styles";
import { Button } from "../Button";

import image from "../../assets/moon.png";

export function Content() {
  return (
    <Container>
      <ContainerContent>
        <h1>Our business Team</h1>
        <div>
          <p className="containerContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi
            sed quo doloremque, possimus illum eligendi. Officiis perspiciatis
            harum atque sed officia animi neque consequatur accusantium,
            nesciunt ex nostrum facilis, velit totam consectetur ipsa doloribus
            magnam.
          </p>
        </div>
        <div className="containerButton">
          <Button text="Get Starded" color="#5735ec" />
        </div>
      </ContainerContent>
      <section>
        <img src={image} alt="" />
      </section>
    </Container>
  );
}
