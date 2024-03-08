import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>myLogo</div>
      <div className={styles.text}>myText</div>
    </div>
  );
};

export default Footer;
