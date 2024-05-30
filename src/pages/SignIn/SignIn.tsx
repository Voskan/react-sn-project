import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.webp";
import { useDispatch } from "react-redux";
import {
  signInWithGithub,
  signInWithGoogle,
} from "@/features/users/slices/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await dispatch<any>(signInWithGoogle());
    return navigate("/");
  };

  const handleGithubLogin = async () => {
    await dispatch<any>(signInWithGithub());
    return navigate("/");
  };

  return (
    <div className="p-6 lg:w-1/2 xl:w-5/12">
      <Link to="/">
        <img src={logo} alt="PlusDev.NET" className="w-14 mx-auto" />
      </Link>
      <h1>Login</h1>
      <p className="mt-2 mb-6">Sign in to your account</p>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-primary w-full mb-4"
      >
        Sign in with Google
      </button>

      <button
        onClick={handleGithubLogin}
        className="btn btn-secondary w-full mb-4"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SignIn;
