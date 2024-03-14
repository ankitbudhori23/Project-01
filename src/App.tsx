import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Layout from "./containers/Layout";
import CheckAuth from "./app/auth";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserLogin } from "./redux/slices/InitialSlice";

const token = CheckAuth();
function App() {
  const dispatch = useDispatch();
  if (token) {
    const user = jwtDecode(token);
    dispatch(setUserLogin(user));
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={<Layout />} />
      <Route
        path="*"
        element={<Navigate to={token ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
