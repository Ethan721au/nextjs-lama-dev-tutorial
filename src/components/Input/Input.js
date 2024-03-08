import React from "react";
import styles from "./input.module.css";
import InputContainer from "../InputContainer/InputContainer";

export default function Input(
  { label, type, defaultvalue, onChange, onBlur, name, error },
  ref
) {
  return (
    <InputContainer label={label}>
      <input
        defaultValue={defaultvalue}
        className={styles.input}
        type={type}
        placeholder={label}
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div>error</div>
    </InputContainer>
  );
}
