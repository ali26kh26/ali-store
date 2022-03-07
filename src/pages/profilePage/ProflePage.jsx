import {
  useAuth,
  useAuthActions,
} from "../../Providers/AuthProvider/AuthProvider";
import { withRouter } from "react-router-dom";
const ProfilePage = ({ history }) => {
  const userData = useAuth();
  const setAuth = useAuthActions();
  const logOutHandler = () => {
    localStorage.clear();
    setAuth(null);
    history.push("/");
  };
  return (
    <>
      <p>name : {userData.name}</p>
      <p>email : {userData.email}</p>
      <p>phone number : {userData.phoneNumber}</p>
      <button onClick={logOutHandler}>log out</button>
    </>
  );
};

export default withRouter(ProfilePage);
