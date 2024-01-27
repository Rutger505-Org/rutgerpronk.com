"use client";

import { FormEvent, useEffect, useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [message, setMessage] = useState("");

  const [nameUnfocused, setNameUnfocused] = useState(false);
  const [emailUnfocused, setEmailUnfocused] = useState(false);
  const [messageUnfocused, setMessageUnfocused] = useState(false);

  function validateForm() {
    return !!name && emailValid && !!message;
  }

  function validateEmail() {
    const regExp = /\S+@\S+\.\S+/;
    setEmailValid(regExp.test(email));
  }

  function onInputBlur(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const inputName = e.currentTarget.name;

    switch (inputName) {
      case "name":
        setNameUnfocused(true);
        break;
      case "email":
        setEmailUnfocused(true);
        break;
      case "message":
        setMessageUnfocused(true);
        break;
      default:
        throw new Error(`Unknown input name: ${inputName}`);
    }
  }

  useEffect(() => {
    validateEmail();
  }, [email]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) {
      setNameUnfocused(true);
      setEmailUnfocused(true);
      setMessageUnfocused(true);
      return;
    }

    // TODO: Send email
    alert("In construction!");
  }

  return (
    <form
      className="flex min-w-[80%] flex-col gap-y-6 rounded-md bg-secondary p-8 sm:min-w-[400px]"
      onSubmit={onSubmit}
    >
      <h3 className="text-2xl text-textPrimary">{t("title")}</h3>
      <input
        name="name"
        className={`${
          !name && nameUnfocused ? "outline-red" : "focus:outline-accent"
        } outline-n w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none outline-1`}
        type="text"
        placeholder={t("name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={onInputBlur}
      />

      <input
        name="email"
        className={`${
          !emailValid && emailUnfocused ? "outline-red" : "focus:outline-accent"
        } w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none outline-1`}
        type="text"
        placeholder={t("email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={onInputBlur}
      />
      <textarea
        name="message"
        className={`${
          !message && messageUnfocused ? "outline-red" : "focus:outline-accent"
        } min-h-[150px] w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none outline-1`}
        placeholder={t("message")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={onInputBlur}
      ></textarea>

      <AnimatedButton className={"mt-3 w-fit"} text={t("submit")} />
      <p className="-mt-3 text-red">In construction!</p>
    </form>
  );
}
