import { setUserLogin } from "../../redux/slices/InitialSlice";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleLoginSuccess = (credentialResponse: any) => {
    const user = jwtDecode(credentialResponse.credential);
    localStorage.setItem("token", credentialResponse.credential);
    dispatch(setUserLogin(user));
    navigation("/dashboard", { replace: true });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          Login with Google
        </h2>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}

export default Login;
