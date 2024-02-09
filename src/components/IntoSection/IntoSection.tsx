"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const IntoSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Olá, eu sou{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Thiago", 1000, "Desenvolvedor web", 1000, "FullStack", 1000]}
              wrapper="span"
              speed={50}
              className="block text-2xl mt-4 sm:text-3xl md:text-5xl xl:text-6xl"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            Sou um desenvolvedor Full Stack, adoro código e adoro resolver problemas usando meus
            conhecimentos. Se você precisa de um portfólio, uma landing page, uma API ou uma
            aplicação completa como um e-commerce ou uma plataforma de gerenciamento de tarefas, é
            só me chamar!
          </p>
          <div>
            <button className=" px-6 py-3 mt-6 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-[0_3px_20px_rgba(250,_250,_250,_0.7)]">
              <Link href="/#contact">Fale comigo</Link>
            </button>
            <Link
              href="/curriculo_thiago_vasconcelos.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <button className=" px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 hover:shadow-[0_3px_20px_rgba(250,_250,_250,_0.7)] border border-blue-500 mt-3">
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#222222] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/my-avatar-dev-portfolio.png"
              alt="avatar-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={280}
              height={280}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntoSection;
