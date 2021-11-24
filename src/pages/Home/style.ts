import styled from "styled-components";

const Head = styled.div`
  span {
    color: #fff;
    font-size: 25px;
    font-weight: 400;
  }
  h1 {
    font-size: 50px;
    max-width: 480px;
    color: #fff;
    font-weight: 700;
    margin: 20px 0;
  }

  .wrapper {
    position: relative;
  }

  .content-info {
    position: absolute;
    top: 30px;
    padding: 240px 60px;
  }
  img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 950px;
    width: 100%;
    filter: brightness(0.1);
  }
`;

const ContentInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .separator {
    width: 100%;
    height: 80px;
    margin-top: -50px;
    clip-path: polygon(0 60%, 100% 0%, 100% 100%, 0% 100%);
    background-color: #eaeaea;
  }
`;

const About = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 200px;
    height: 250px;
    margin-left: 140px;
  }
`;

const ContentForm = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Form = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  button {
    margin-top: 21px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 20px;

    label {
      font-size: 14px;
      font-weight: 700;
    }

    input {
      margin-top: 5px;
      outline: none;
      border-radius: 4px;
      border: 1px solid #cdcdcd;
      width: 250px;
      height: 40px;
      padding: 8px;
    }
  }
`;

const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #333333;
  line-height: 30px;
  margin-bottom: 15px;
`;

const Text = styled.span`
  font-size: 20px;
  line-height: 25px;
  color: #333333;

  p {
    max-width: 395px;
    margin-top: 20px;
  }
`;

export { ContentForm, SubTitle, Text, ContentInfo, Form, About, Head };
