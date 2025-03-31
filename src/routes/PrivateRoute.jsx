import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, requireAuth = true }) {
  const user = useSelector((state) => state.user.value);

  if (!user.loading && !user.isAuthenticated && requireAuth) {
    return <Navigate to="/login" />;
  }

  if (!user.loading && user.isAuthenticated && !requireAuth) {
    return <Navigate to="/" />;
  }
  if (user.loading || !user.initialized) {
    return <div>Loading...</div>;
  }

  return children;
}
