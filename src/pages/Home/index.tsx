import React, { useState } from "react";
import { background, man } from "../../assets";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputMask from "react-input-mask";
import {
  ContentForm,
  SubTitle,
  Text,
  ContentInfo,
  Form,
  About,
  Head,
} from "./style";

const Home: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <Header />
      <Head>
        <div className="wrapper">
          <img src={background} alt="Background" />
          <div className="content-info">
            <span>Desenvolvedores prontos para ação</span>
            <h1>Seu projeto pronto na velocidade da luz</h1>
            <Button color="Red">Peça uma reunião</Button>
          </div>
        </div>
      </Head>
      <ContentInfo>
        <About>
          <div>
            <SubTitle>Nossa iniciativa</SubTitle>
            <Text>
              <p>
                Somos desenvolvedores que se dedicam a fazer projetos perfeitos
                e entregar valor para todos os seus clientes. Gostamos de ver
                clientes satisfeitos com projetos feitos com carinho, atenção e
                qualidade altíssima.
              </p>
            </Text>
          </div>
          <img src={man} alt="Homem" />
        </About>
        <div className="separator"></div>
        <ContentForm>
          <SubTitle>Mande um oi, ligamos para você!</SubTitle>
          <Text>
            Preencha seus dados para que a gente possa entrar em contato.
          </Text>
          <Form>
            <div>
              <label>Nome Completo</label>
              <input
                type="text"
                placeholder="Ex: Lorem Ipsum"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Whatsapp</label>
              <InputMask
                mask="(99) 99999-9999"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(99) 99999-9999"
              />
            </div>
            <Button color="Green">Peça uma reunião</Button>
          </Form>
        </ContentForm>
      </ContentInfo>
      <Footer />
    </>
  );
};

export default Home;
