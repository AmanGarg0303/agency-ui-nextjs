import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
        <h1 className={styles.title}>AVOCADO CREATIVES</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact">
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src={`/img/link.png`} width="40" height="40" />
          </a>
        </h1>
      </div>

      <div className={styles.carS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@AMAN.GARG <br /> +123 4567 9012
        </div>
      </div>

      <div className={styles.carS}>
        <div className={styles.cardItem}>
          FOLLOW US <br /> _FB_IN_BE_TW
        </div>
        <div className={styles.cardItem}>
          &copy; 2022 AMAN INTERACTIVE, <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
