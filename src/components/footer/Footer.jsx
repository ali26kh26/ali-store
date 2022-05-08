import styles from "./footer.module.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.container}>
      <p>Contact me</p>
      <ul>
        <li>
          <a href="https://github.com/ali26kh26">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/ali26kh26">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="/">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
