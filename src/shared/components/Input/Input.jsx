import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import { useState } from "react";

const Input = ({
  className,
  label,
  placeholder,
  onChange,
  value,
  ...field
}) => {
  const id = nanoid();
  // if (field.required) {
  //   field.placeholder += " *";
  // }

  const [input, setInput] = useState("");

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <div className={styles.formGroup}>
      <label
        className={`${styles.formLabel} ${
          !(label || input) && styles.isHidden
        }`}
        htmlFor={id}
      >
        {label || placeholder}
      </label>
      <input
        value={value}
        onChange={(e) => {
          handleChange(e);
          onChange(e);
        }}
        className={`${styles.formInput} ${className}`}
        placeholder={placeholder}
        {...field}
        id={id}
      />
    </div>
  );
};

Input.defaultProps = {
  required: false,
  type: "text",
};

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
