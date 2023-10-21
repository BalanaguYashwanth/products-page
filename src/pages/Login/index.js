import { requestSignInWithPopup } from "../../firebase";
import GoogleButton from "react-google-button";
import styles from './Login.module.scss'
import toast, { Toaster } from "react-hot-toast";
import { shortText } from "../../utils/helpers";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate(); 
  const handleSignInWithGoogle = () => {
    requestSignInWithPopup()
      .then((res) => {
        const accessToken = res?.user?.accessToken;
        localStorage.setItem("access-token-products", accessToken);
        navigate('/')
      })
      .catch((err) => {
        toast.error(shortText({text:err?.message,limit:40})||'please try after sometime')
      });
  };

  return (
    <main className={styles.container}>
      <Toaster />
      <h1>Signin</h1>
      <GoogleButton
        onClick={handleSignInWithGoogle}
      />
    </main>
  );
};

export default Login;
