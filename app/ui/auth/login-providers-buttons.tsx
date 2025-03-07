import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
} from "@hugeicons/core-free-icons";
import { signIn } from "@/auth";

const LoginProvidersButtons = () => {
  const handlerSubmit = async (formData: FormData) => {
    "use server";
    const formDataJson = Object.fromEntries(formData.entries());
    const provider = Object.keys(formDataJson)[1];
    await signIn(provider, { redirectTo: "/dashboard" });
  };

  return (
    <>
      <hr className="border-t border-gray-800" />
      <p className="flex w-full justify-center text-gray-400">
        Or continue with
      </p>
      <form className="flex justify-center space-x-2" action={handlerSubmit}>
        <button
          disabled
          data-provider="google"
          name="google"
          type="submit"
          className="btn-secondary-outline text-center justify-center flex gap-2 items-center"
          aria-label="Continue with Google"
        >
          <HugeiconsIcon icon={GoogleIcon} className="w-6 h-6" />
          Google
        </button>
        <button
          name="github"
          type="submit"
          className="btn-secondary-outline text-center justify-center flex gap-2 items-center"
          aria-label="Continue with Github"
        >
          <HugeiconsIcon icon={GithubIcon} className="w-6 h-6" />
          Github
        </button>
      </form>
    </>
  );
};

export default LoginProvidersButtons;
