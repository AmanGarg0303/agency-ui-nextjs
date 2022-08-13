import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#49cbff" right="-37vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brandName}>AVOCADO</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={styles.desc}>
          Create live people and target the right people for messages based on
          their behaviours.
        </p>
        <button className={styles.button}>Discover</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocado.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Intro;
