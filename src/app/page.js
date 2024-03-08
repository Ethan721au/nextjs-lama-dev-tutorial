import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thougths Agency.</h1>
        <p>Some random text</p>
        <div className={styles.buttons}>
          <button>Learn more</button>
          <button>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" fill className={styles.brandsImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

// note that for the Image component, "fill" means it will fill the parent element, in this case the <div>, but for it to work, the parent element MUST be in position relative, fixed or absolute.

export default Home;
