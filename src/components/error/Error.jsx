import style from "./error.module.scss";
const Error = (props) => {
  return (
    <div className={style.container}>
      <p>Error : {props.error}</p>
      <p>Hint : If you are in Iran you must use VPN</p>
    </div>
  );
};

export default Error;
