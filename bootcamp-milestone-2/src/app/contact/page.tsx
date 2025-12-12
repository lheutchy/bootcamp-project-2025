import React from "react";
import style from "./page.module.css";

export default function Contact() {
  return (
    <>
      <main className={style.container}>
        <h1 className={style.pageTitle}>Contact</h1>
          <form id="contact-form" className={style.form}>
            <label htmlFor="name" className={style.label}>Name</label>
              <input className={style.input} type="text" id="name" required />

              <label htmlFor="email" className={style.label}>Email</label>
              <input className={style.input} type="email" id="email" required />

              <label htmlFor="message" className={style.label}>Message</label>
              <textarea className={style.textarea} id="message" required />

              <input className={style.submit} type="submit" />
          </form>
        </main>
    </>
  );
}