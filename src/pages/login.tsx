import { FC } from "react";
import { signinRedirect } from '../services/auth-service';

const LoginPage: FC = () => {
  signinRedirect();
  return <span>login</span>;
};

export default LoginPage;