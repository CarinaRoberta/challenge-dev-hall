import React from "react";
import { Container, SocialNetwork } from "./style";
import { GrLinkedinOption, GrInstagram, GrTwitter } from "react-icons/gr";

const Header: React.FC = () => {
  return (
    <Container>
      <h1>MeuFreela</h1>
      <SocialNetwork>
        <a href="">
          <GrLinkedinOption size={30} color={"white"} />
        </a>
        <a href="">
          <GrInstagram size={25} color={"white"} />
        </a>
        <a href="">
          <GrTwitter size={25} color={"white"} />
        </a>
      </SocialNetwork>
    </Container>
  );
};

export default Header;
