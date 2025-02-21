"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth.schema";

interface RegisterFormProps {
  email: string;
  password: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const registerHandler: SubmitHandler<RegisterFormProps> = async (
    data: RegisterFormProps
  ) => {
    console.log(data);
  };

  return (
    <section className="container mx-auto">
      <form
        onSubmit={handleSubmit((data: RegisterFormProps) =>
          registerHandler(data)
        )}
        className="flex flex-col space-y-4"
      >
        <div className="flex justify-between">
          <div>
            <div className="relative">
              <input
                type="text"
                autoComplete="off"
                placeholder="Your firtsname"
                {...register("firstname")}
                className="form-input"
              />
            </div>
            {errors.firstname?.message && (
              <small className="text-red-500">{errors.firstname.message}</small>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type="text"
                autoComplete="off"
                placeholder="Your lastname"
                {...register("lastname")}
                className="form-input"
              />
            </div>
            {errors.lastname?.message && (
              <small className="text-red-500">{errors.lastname.message}</small>
            )}
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="email"
              autoComplete="off"
              placeholder="Your email"
              {...register("email")}
              className="form-input"
            />
          </div>
          {errors.email?.message && (
            <small className="text-red-500">{errors.email.message}</small>
          )}
        </div>

        <div>
          <div className="relative">
            <input
              type="password"
              autoComplete="off"
              placeholder="Your password"
              {...register("password")}
              className="form-input"
            />
          </div>
          {errors.password?.message && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
        </div>
        <button
          type="submit"
          className="py-3 px-4 block w-full rounded-lg text-sm bg-primary text-white"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
