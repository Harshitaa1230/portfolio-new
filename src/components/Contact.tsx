"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

const fieldClass =
  "border-b border-foreground bg-transparent pb-2 font-sans text-[16px] leading-[1.3] outline-none placeholder:text-muted focus:border-b-2";

const topics = [
  "Web Design & Development",
  "Brand Identity",
  "Brand Guidelines",
  "Graphic Design",
  "Other",
];

type Errors = { name?: string; email?: string; message?: string };

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/harshitaupadhyay2287@gmail.com";

export default function Contact({ standalone = false }: { standalone?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = "REQUIRED";
    if (!email.trim()) nextErrors.email = "REQUIRED";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "INVALID EMAIL";
    if (!message.trim()) nextErrors.message = "REQUIRED";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSent(false);
    setSubmitError("");
    setSending(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          topic,
          message: message.trim(),
          _replyto: email.trim(),
          _subject: "New inquiry from portfolio",
          _template: "table",
          _captcha: "false",
          _honey: "",
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setSent(true);
      setName("");
      setEmail("");
      setPhone("");
      setTopic("");
      setMessage("");
    } catch {
      setSubmitError("SOMETHING WENT WRONG — PLEASE TRY AGAIN.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`flex w-full flex-col ${
        standalone
          ? "min-h-[calc(100svh-var(--header-height))] py-10 md:py-14 lg:py-16"
          : "py-20 md:py-28"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className={`${mono} flex items-start justify-between gap-4`}
      >
        <span>CONTACT</span>
        <span>INQUIRY</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className="mt-10 grid flex-1 grid-cols-1 content-center items-start gap-10 md:mt-12 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Harshita Upadhyay"
              fill
              sizes="320px"
              preload
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="font-sans text-[40px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[56px] lg:text-[64px]">
            SAY BONJOUR
          </h2>

          <p className="mt-6 max-w-[36ch] font-sans text-[17px] leading-[1.3]">
            Have a project in mind or just want to say hello? Tell me a little
            about what you&apos;re working on and I&apos;ll be in touch.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={mono}>
                NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Jane Smith"
                className={fieldClass}
              />
              {errors.name && <span className={`${mono} text-foreground`}>{errors.name}</span>}
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={mono}>
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                  className={fieldClass}
                />
                {errors.email && (
                  <span className={`${mono} text-foreground`}>{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={mono}>
                  PHONE
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+00 0123456789"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="relative flex flex-col gap-2">
              <label htmlFor="topic" className={mono}>
                TOPIC
              </label>
              <select
                id="topic"
                name="topic"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                className={`${fieldClass} appearance-none pr-6 ${
                  topic ? "text-foreground" : "text-muted"
                }`}
              >
                <option value="">Select topic</option>
                {topics.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span
                aria-hidden
                className={`${mono} pointer-events-none absolute bottom-2 right-0`}
              >
                ▾
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={mono}>
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type here…"
                className={`${fieldClass} min-h-[140px] resize-y`}
              />
              {errors.message && (
                <span className={`${mono} text-foreground`}>{errors.message}</span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                disabled={sending}
                className={`${mono} transition-opacity duration-200 hover:opacity-50 disabled:cursor-wait disabled:opacity-50`}
              >
                {sending ? "[ SENDING… ]" : "[ SUBMIT ]"}
              </button>
              <span aria-live="polite" className={`${mono} text-muted`}>
                {sent && "THANK YOU — I'LL BE IN TOUCH."}
                {submitError}
              </span>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
