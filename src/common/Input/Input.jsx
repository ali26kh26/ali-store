import styles from "./Input.module.css";

const Input = ({ name, label, formik, type = "text" }) => {
  return (
    <>
      <div className={styles.container}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type={type}
          name={name}
          {...formik.getFieldProps(name)}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className={styles.error}>{formik.errors[name]}</div>
        )}
      </div>
    </>
  );
};

export default Input;
