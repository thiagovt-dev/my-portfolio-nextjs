"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "../common/TabButton";

const TAB_BUTTON_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>NEXTjs</li>
        <li>E muito mais!</li>
      </ul>
    ),
  },
  {
    title: "Formação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Programador Full Stack Profissional</li>
        <li className="ms-5 mb-4">Onebitcode</li>

        <li> Ciência da Computação (em andamento)</li>
        <li className="ms-5">Faculdade Uniamerica</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-8 sm:py-16 xl:px-6 ">
        <Image
          src="/IMG_3119.jpeg"
          alt=""
          width={500}
          height={500}
          className="border-black rounded-xl shadow-[rgba(150,_150,_150,_0.2)_0px_20px_30px_-7px]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold mb-4">Sobre mim</h1>
          <p className="text-base lg:text-lg">
            Sou um desenvolvedor web fullstack que gosta de criar soluções utilizando meus
            conhecimentos. Minha missão é desenvolver aplicações com excelência, buscando sempre
            aprimorar minhas habilidades. Tenho experiência com tecnologias front-end como
            JavaScript, TypeScript, React e Next.js, além de dominar frameworks de estilização como
            Bootstrap e Tailwind. No back-end, utilizo Node.js e Express, e tenho conhecimento em
            bancos de dados PostgreSQL e MongoDB. Estou atualmente cursando Ciência da Computação e
            sou um entusiasta por aprender novas tecnologias, mantendo-me sempre atualizado no mundo
            da programação.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Formação
            </TabButton>
          </div>
          <div className="mt-5">{TAB_BUTTON_DATA.find((t)=>t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
