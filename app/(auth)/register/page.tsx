import RegisterForm from "@/components/Auth/RegisterForm";
import Logo from "@/components/Logo";
import React from "react";

const Login = () => {
  return (
    <section className="max-w-sm w-full flex flex-col space-y-4">
      <Logo />
      <h6 className="flex w-full justify-center text-gray-400">
        Welcome back to tasky!
      </h6>
      <RegisterForm />
      <small>
        Don't have an account?{" "}
        <a href="/register" className="text-primary">
          Register
        </a>
      </small>
    </section>
  );
};

export default Login;
