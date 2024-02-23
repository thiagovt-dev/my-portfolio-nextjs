"use client";
import Link from "next/link";
import React, { FormEvent, useRef, useState } from "react";
import { formData, postEmail } from "../../services/formDataService";
import SpinnerButton from "../common/SpinnerButton";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState<React.ReactNode>("Enviar Mensagem");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setButtonText(<SpinnerButton />);

    const JSONdata = JSON.stringify(formData);
    try {
      const response = await postEmail(JSONdata);
  
      if (response.status === 200) {
        setEmailSubmitted(true);
        setButtonText("Enviar Mensagem");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 2000);
      }
      
    } catch (error) {
      
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 py-12 gap-4 relative" id="contact">
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Vamos Conversar?</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Eu estou sempre disponivel a novos contratos e meu inbox esta sempre aberto para receber
          suas solicitações. Quando você tiver uma duvida, tiver uma ideia ou simplesmente quiser
          trocar uma ideia, eu vou estar pronto para lhe ouvir.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/thiagovt-dev">
            <svg
              className="h-6 w-6 text-white-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              {" "}
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/thiagovasconcelosteixeira/">
            <svg
              className="h-6 w-6 text-white-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Seu nome
            </label>
            <input
              name="name"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Elon Musk"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Seu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="elonmusk@email.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Assunto
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Ideia de projeto"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Tenho uma ideia de projeto e gostaria da sua ajuda..."
              maxLength={300}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-800 font-medium py-2.5 px-5 rounded-lg w-full flex justify-center ">
            {buttonText}
          </button>
        </form>
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">Email enviado com sucesso!</p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
