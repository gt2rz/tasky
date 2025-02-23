import LoginForm from "@/components/Auth/LoginForm";

const Login = () => {
  return (
    <section className="max-w-sm w-full flex flex-col space-y-4">
      <h1 className="text-2xl">Login to your account</h1>
      <h6 className="flex w-full justify-center text-gray-400">
        Welcome back to tasky!
      </h6>
      <LoginForm />
      <br />
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
