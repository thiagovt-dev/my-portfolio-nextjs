/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  subject: string;
  message: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL
  ? `https://${process.env.NEXT_PUBLIC_API_URL}`
  : "";

export const EmailTemplate = ({ name, subject, message }: EmailTemplateProps) => {
  const previewText = `Que bom ter você aqui, ${name}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[580px]">
            <Section className="mt-[32px]">
              {/* <Img
                src={`${process.env.baseUrl}/emailLogo.png`}
                width="40"
                height="37"
                alt="logo"
                className="my-0 mx-auto"
              /> */}
            </Section>
            <Heading className="text-black text-[28px] font-normal text-center p-0 my-[30px] mx-0">
              Obrigado pelo seu contato, <strong>{name}</strong>!
            </Heading>
            <Text className="text-black text-[16px] px-6 mb-10 leading-[24px]">
              É um prazer receber sua mensagem:
            </Text>
            <Section className="text-black text-[14px] rounded-xl mx-auto max-w-[90%] bg-[#f8f8f8] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] leading-[24px]">
              <Row className="flex pt-6 pb-0 px-6 ">
                <Column align="left" className="block mr-3">
                  <strong>Assunto: </strong>
                </Column>
                <Column align="left">{subject}</Column>
              </Row>
              <Text className="pt-0 px-6 pb-6 leading-6">"{message}"</Text>
            </Section>
            <Text className="text-black text-[16px] px-6 leading-[24px] mt-10 text-justify">
              Estou empenhado em fornecer uma resposta rápida e eficiente ao seu contato. Em breve,
              você receberá um e-mail com uma proposta personalizada que certamente atenderá às suas
              expectativas e necessidades.
            </Text>
            <Text className="text-black text-[16px] px-6 leading-[24px] text-center mt-10">
              Enquanto isso, fique a vontade para conferir minhas redes profissionais
            </Text>

            <Section className="flex justify-center items-center ">
              <Row className="flex">
                <Column className="block mr-2">
                  <Link
                    className="flex justify-center items-center gap-1"
                    href="https://github.com/thiagovt-dev">
                    <Text className="underline">Acesse meu portfolio no github</Text>
                    {/* <Img
                      src={`${process.env.baseUrl}/icons8-github.png`}
                      width="24"
                      height="24"
                      alt="Vercel"
                      className="my-0 mx-auto"
                    /> */}
                  </Link>
                </Column>
                <Column>
                  <Link
                    className="flex items-center justify-center gap-1"
                    href="https://www.linkedin.com/in/thiagovasconcelosteixeira/">
                    <Text className="underline">Acesse meu perfil no linkedin </Text>
                    {/* <Img
                      src={`${process.env.baseUrl}/icons8-linkedin.png`}
                      width="24"
                      height="24"
                      alt="Vercel"
                      className="my-0 mx-auto"
                    /> */}
                  </Link>
                </Column>
              </Row>
            </Section>
            <Hr className="border border-solid border-[#cccccc] my-[20px] mx-0 w-full" />
            <Section className="text-center mb-5">
              <Text className="text-[#9ca299] text-[14px] leading-6 m-0 ">
                Thiago Vasconcelos - Desenvolvedor Fullstack
              </Text>
              <Text className="text-[#9ca299] text-[14px] m-0 leading-6">
                Imperatriz-Ma, Brasil, 65900-000
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
