"use client";

import { signup } from "@/app/actions/auth";
import { useActionState } from "react";

const RegisterForm = () => {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <section className="container mx-auto">
      <form action={action} className="flex flex-col space-y-4">
        <div className="flex justify-between gap-2">
          <div>
            <div className="relative">
              <input
                type="text"
                autoComplete="off"
                placeholder="Your firtsname"
                className="auth--form-input"
              />
            </div>
            {state?.errors?.firstname &&
              state?.errors?.firstname.map((error) => (
                <small className="text-input_error">{error}</small>
              ))}
          </div>

          <div>
            <div className="relative">
              <input
                type="text"
                autoComplete="off"
                placeholder="Your lastname"
                className="auth--form-input"
              />
            </div>
            {state?.errors?.lastname &&
              state?.errors?.lastname.map((error) => (
                <small className="text-input_error">{error}</small>
              ))}
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="email"
              autoComplete="off"
              placeholder="Your email"
              className="auth--form-input"
            />
          </div>
          {state?.errors?.email &&
            state?.errors?.email.map((error) => (
              <small className="text-input_error">{error}</small>
            ))}
        </div>

        <div>
          <div className="relative">
            <input
              type="password"
              autoComplete="off"
              placeholder="Your password"
              className="auth--form-input"
            />
          </div>
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li className="text-input_error" key={error}>
                    - {error}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button type="submit" className="btn-primary" disabled={pending}>
          Create
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
