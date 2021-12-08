import React from "react";
import { Container, SocialNetwork } from "./style";
import { GrLinkedinOption, GrInstagram, GrTwitter } from "react-icons/gr";

const Header: React.FC = () => {
  return (
    <Container>
      <h1>MeuFreela</h1>
      <SocialNetwork>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <GrLinkedinOption size={30} color={"white"} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <GrInstagram size={25} color={"white"} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <GrTwitter size={25} color={"white"} />
        </a>
      </SocialNetwork>
    </Container>
  );
};

export default Header;
