import styles from "./inputContainer.module.css";
const InputContainer = ({ label, bgcolor, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default InputContainer;
