import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const token = Cookies.get("driveTaxToken");
  console.log("🚀 ~ RequireAuth ~ token:", token);

  if (!token) return <Navigate to="/login" />;

  return children;
};

export default RequireAuth;
