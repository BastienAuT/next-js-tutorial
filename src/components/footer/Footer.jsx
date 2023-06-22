import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Bastmamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={22} height={22} className={styles.icon} alt="Bastien Dev" />
        <Image src="/2.png" width={22} height={22} className={styles.icon} alt="Bastien Dev" />
        <Image src="/3.png" width={22} height={22} className={styles.icon} alt="Bastien Dev" />
        <Image src="/4.png" width={22} height={22} className={styles.icon} alt="Bastien Dev" />
      </div>
    </div>
  );
};

export default Footer;
