import * as React from "react";

interface EmailTemplateProps {
  name: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({name, subject, message }) => (
  <div>
    <h1>{subject}</h1>
    <p>Obrigado pelo seu contato, {name}!</p>
    <p>Nova mensagem enviada:</p>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
