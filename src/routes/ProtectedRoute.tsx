import { ReactNode } from "react";
import { Redirect } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Redirect to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
