import { useState, type FormEvent } from "react";
import { profile } from "../content";
import Section from "./Section";
import "../styles/contact.css";

type Errors = { name?: string; email?: string; message?: string };

const validate = (v: { name: string; email: string; message: string }): Errors => {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "That email address doesn't look right.";
  if (!v.message.trim()) e.message = "Please write a short message.";
  return e;
};

const Contact = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (errors[k]) setErrors(validate(next));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setSubmitted(true);
    if (Object.keys(errs).length) {
      setStatus("");
      const first = (["name", "email", "message"] as const).find((k) => errs[k]);
      if (first) document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    const subject = `Portfolio enquiry from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\nReply to: ${values.email.trim()}`;
    setStatus(`Your email app should open. If it doesn't, write to ${profile.email}.`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const field = (k: keyof Errors) => ({
    "aria-invalid": errors[k] ? (true as const) : undefined,
    "aria-describedby": errors[k] ? `cf-${k}-err` : undefined,
  });

  return (
    <Section id="contact" title="Let's talk about your data." hideTitle className="contact">
      <p className="contact__lead" aria-hidden="true">
        Let's talk about your data.
      </p>
      <a className="contact__email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>

      <div className="contact__cols">
        <ul className="contact__links">
          <li>
            <a href={profile.phoneHref}>
              <span>Phone · {profile.phone}</span>
              <span aria-hidden="true">→</span>
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener">
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener">
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href={profile.resume} target="_blank" rel="noopener">
              <span>Résumé (PDF)</span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="form__field">
            <label htmlFor="cf-name">Name</label>
            <input id="cf-name" name="name" type="text" autoComplete="name" required value={values.name} onChange={set("name")} {...field("name")} />
            {errors.name && (
              <p id="cf-name-err" className="form__err">
                {errors.name}
              </p>
            )}
          </div>
          <div className="form__field">
            <label htmlFor="cf-email">Email</label>
            <input id="cf-email" name="email" type="email" autoComplete="email" required value={values.email} onChange={set("email")} {...field("email")} />
            {errors.email && (
              <p id="cf-email-err" className="form__err">
                {errors.email}
              </p>
            )}
          </div>
          <div className="form__field">
            <label htmlFor="cf-message">Message</label>
            <textarea id="cf-message" name="message" rows={5} required value={values.message} onChange={set("message")} {...field("message")} />
            {errors.message && (
              <p id="cf-message-err" className="form__err">
                {errors.message}
              </p>
            )}
          </div>
          <button type="submit" className="btn btn--solid">
            Send message
          </button>
          <p className="form__status" role="status" aria-live="polite">
            {submitted ? status : ""}
          </p>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
