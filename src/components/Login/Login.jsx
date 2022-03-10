import { useFormik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Input from "../../common/Input/Input";
import { useQuery } from "../../hooks/useQuery";
import loginInputOptions from "../../options/loginInputOptions";
import { useAuthActions } from "../../Providers/AuthProvider/AuthProvider";
import { loginUser } from "../../services/loginUser";
import styles from "./Login.module.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email format").required("email required"),
  password: yup.string().required("password required"),
});

const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  const query = useQuery().get("redirect") || "/";
  const onSubmit = (values) => {
    loginUser(values)
      .then(({ data }) => {
        setAuth(data);
        localStorage.setItem("authState", JSON.stringify(data));
        setError(null);
        navigate(query);
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
      <h2>Log in form</h2>
      <form onSubmit={formik.handleSubmit}>
        {loginInputOptions.map((props, index) => {
          return <Input {...props} formik={formik} key={index} />;
        })}
        {error && <p className={styles.error}>{error}</p>}
        <button
          className={styles.loginBtn}
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>
        <NavLink to={`/signup?redirect=${query}`}>Not signup yet ?</NavLink>
      </form>
    </div>
  );
};

export default Login;
