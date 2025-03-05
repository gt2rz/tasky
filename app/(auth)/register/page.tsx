import RegisterForm from "@/app/ui/auth/register-form";
import Logo from "@/components/Logo";
import React from "react";

const Login = () => {
  return (
    <section className="max-w-sm w-full flex flex-col space-y-4">
      <h1 className="text-2xl">Create a new account</h1>
      <h6 className="flex w-full justify-center text-gray-400 text-sm">
        Please, fill the form to create a new account and start using tasky!
      </h6>
      <br />
      <RegisterForm />
      <br />
      <p className="flex w-full text-gray-400 text-sm">
        Have an account?
        <a
          href="/login"
          className="ps-1 text-primary hover:underline hover:underline-offset-4"
        >
          {" "}
          Login
        </a>
      </p>
      <br />
      <br />
      <p className="text-gray-400 text-sm">
        By creating a new account, you agree to our{" "}
        <a
          href="/terms"
          className="text-primary hover:underline hover:underline-offset-4"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="/privacy"
          className="text-primary hover:underline hover:underline-offset-4"
        >
          Privacy Policy
        </a>
      </p>
      <br />
    </section>
  );
};

export default Login;
