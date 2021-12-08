import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(#ee5253, #d92223);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 27px 22px;

  h1 {
    font-weight: 700;
    font-size: 30px;
  }
`;

const SocialNetwork = styled.div`
  a {
    padding-left: 20px;
    transition: all 0.2s ease;
    &:hover {
      filter: brightness(0.5);
    }
  }
`;

export { Container, SocialNetwork };
