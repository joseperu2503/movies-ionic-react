import { ReactNode } from "react";
import { Redirect } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const RedirectRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/tabs/home" />;
  } else {
    return children;
  }
};

export default RedirectRoute;
