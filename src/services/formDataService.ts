import { FormEvent } from "react";

export const formData = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name")!.toString();
  const email = formData.get("email")!.toString();
  const subject = formData.get("subject")!.toString();
  const message = formData.get("message")!.toString();

  return {name, email, subject, message };
};

export const postEmail = async (JSONdata: string) => {
  const res = await fetch(`/api/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  });

  const data = await res.json();
  return Response.json(data);
};
