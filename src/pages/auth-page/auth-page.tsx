import React from "react";
import AuthForm from "./auth-form/auth-form";
import "./auth-page.css";

const AuthPage: React.FC = () => {
  return (
    <div className="auth-page">
        <AuthForm/>
    </div>
  );
};
export default AuthPage;
