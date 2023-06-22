import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Bastien Dev Contact information",
  description: "This is the description",
}

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}> Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="ohbahcestsûr"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input
            type="email"
            placeholder="email"
            id=""
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <Button url="#" text="Send"></Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
