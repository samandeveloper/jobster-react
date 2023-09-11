//we use this file (component) to protect the dashboard page (<SharedLayout />) which is the parent parent
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; //since we want the user object from the initialState

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/landing" />;
  }
  // if everything ok then return children
  return children;
};
export default ProtectedRoute;
