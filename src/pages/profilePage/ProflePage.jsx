import { useNavigate } from "react-router-dom";
import {
  useAuth,
  useAuthActions,
} from "../../Providers/AuthProvider/AuthProvider";
const ProfilePage = ({ history }) => {
  const navigate = useNavigate();
  const userData = useAuth();
  const setAuth = useAuthActions();
  const logOutHandler = () => {
    localStorage.clear();
    setAuth(null);
    navigate("/");
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

export default ProfilePage;
