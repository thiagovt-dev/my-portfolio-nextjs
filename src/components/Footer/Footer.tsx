import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent ">
      <div className="container mx-auto p-8 flex justify-between">
        <span>
          <Image src="/reshot-icon-browser-DEAK34BLPC.svg" alt="" width={30} height={30} />
        </span>
        <p className="text-slate-600 text-sm">
          &copy; 2024-2025 Criado por Thiago Vasconcelos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;