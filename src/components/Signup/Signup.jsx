import { useFormik } from "formik";
import { NavLink, withRouter } from "react-router-dom";
import * as yup from "yup";
import Input from "../../common/Input/Input";
import singupInputOptions from "../../options/singupInputOptions";
import styles from "./Signup.module.css";
import { signupUser } from "../../services/signupUser";
import { useState } from "react";
import { useAuthActions } from "../../Providers/AuthProvider/AuthProvider";
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Name required"),
  email: yup.string().email("Invalid email format").required("email required"),
  phoneNumber: yup.string().required("phone number required"),
  password: yup.string().required("password required"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // ),
  passwordConfirmation: yup
    .string()
    .required("password confirmation required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = ({ history }) => {
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  const onSubmit = (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    signupUser(userData)
      .then(({ data }) => {
        setAuth(data);
        localStorage.setItem("authState", JSON.stringify(data));
        history.push("/");
      })
      .catch((err) => {
        if (err.response) setError(err.response.data.message);
      });
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className={styles.container}>
      <h2>sign up form</h2>
      <form onSubmit={formik.handleSubmit}>
        {singupInputOptions.map((props, index) => {
          return <Input {...props} formik={formik} key={index} />;
        })}
        {error && <p className={styles.error}>{error}</p>}
        <button
          className={styles.signupBtn}
          type="submit"
          disabled={!formik.isValid}
        >
          sign up
        </button>
        <NavLink to="/login">Already have account ?</NavLink>
      </form>
    </div>
  );
};

export default withRouter(Signup);
