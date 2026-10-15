"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

const fieldClass =
  "border-b border-foreground bg-transparent pb-2 font-sans text-[16px] leading-[1.3] outline-none placeholder:text-muted focus:border-b-2";

const portraits = [
  { tone: "bg-neutral-300", text: "text-foreground", label: "STUDIO — 01" },
  { tone: "bg-neutral-700", text: "text-inverse-foreground", label: "STUDIO — 02" },
  { tone: "bg-neutral-500", text: "text-inverse-foreground", label: "STUDIO — 03" },
];

const topics = [
  "Web Design & Development",
  "Brand Identity",
  "Brand Guidelines",
  "Graphic Design",
  "Other",
];

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [portrait, setPortrait] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = "REQUIRED";
    if (!email.trim()) nextErrors.email = "REQUIRED";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "INVALID EMAIL";
    if (!message.trim()) nextErrors.message = "REQUIRED";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSent(true);
    setName("");
    setEmail("");
    setPhone("");
    setTopic("");
    setMessage("");
  };

  return (
    <section id="contact" className="px-[11px] py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="md:grid md:grid-cols-2 md:gap-8"
      >
        <span className={mono}>CONTACT</span>
        <div className="mt-6 flex items-start justify-between gap-4 md:mt-0">
          <h2 className="font-sans text-[40px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[56px] lg:text-[64px]">
            SAY BONJOUR
          </h2>
          <span className={mono}>INQUIRY</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-8"
      >
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => setPortrait((current) => (current + 1) % portraits.length)}
            aria-label="Next image"
            className="block w-full max-w-[320px] text-left"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={portrait}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className={`absolute inset-0 flex items-end p-4 ${portraits[portrait].tone}`}
                >
                  <span className={`${mono} ${portraits[portrait].text}`}>
                    {portraits[portrait].label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <span className={`${mono} mt-3 block text-muted`}>[ NEXT IMAGE ]</span>
          </button>
        </div>

        <div className="md:col-start-2">
          <p className="max-w-[320px] font-sans text-[17px] leading-[1.3]">
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
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type here…"
                className={`${fieldClass} resize-y`}
              />
              {errors.message && (
                <span className={`${mono} text-foreground`}>{errors.message}</span>
              )}
            </div>

            <div className="flex items-center gap-6">
              <button
                type="submit"
                className={`${mono} transition-opacity duration-200 hover:opacity-50`}
              >
                [ SUBMIT ]
              </button>
              {sent && (
                <span className={`${mono} text-muted`}>
                  THANK YOU — I&apos;LL BE IN TOUCH.
                </span>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
