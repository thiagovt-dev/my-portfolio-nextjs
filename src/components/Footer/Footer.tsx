import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent ">
      <div className="container mx-auto p-8 flex md:justify-between justify-center">
        <span>
          <Image
            src="/reshot-icon-browser-DEAK34BLPC.svg"
            alt=""
            width={30}
            height={30}
            className="hidden md:block"
          />
        </span>
        <p className="text-slate-600 text-sm text-center">
          &copy; 2024 Criado por Thiago Vasconcelos. <br className="md:hidden block" /> Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
