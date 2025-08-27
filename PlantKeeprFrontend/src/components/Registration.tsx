import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../firebase";

function Registration() {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const HandleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {}
  };
  return (
    <button onClick={() => HandleGoogleLogin()}>Continue with Google</button>
  );
}

export default Registration;
