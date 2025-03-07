"use client";

import { signup } from "@/app/actions/auth";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const RegisterForm = () => {
  const [state, action, pending] = useActionState(signup, undefined);
  const status = useFormStatus();

  return (
    <section className="container mx-auto">
      <form action={action} className="flex flex-col space-y-4">
        <div className="flex justify-between gap-2">
          <div>
            <div className="relative">
              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="off"
                placeholder="Your firtsname"
              />
            </div>
            {state?.errors?.firstname &&
              state?.errors?.firstname.map((error, index) => (
                <small key={index} className="auth--form-input_error">
                  {error}
                </small>
              ))}
          </div>

          <div>
            <div className="relative">
              <input
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="off"
                placeholder="Your lastname"
              />
            </div>
            {state?.errors?.lastname &&
              state?.errors?.lastname.map((error, index) => (
                <small key={index} className="auth--form-input_error">
                  {error}
                </small>
              ))}
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Your email"
            />
          </div>
          {state?.errors?.email &&
            state?.errors?.email.map((error, index) => (
              <small key={index} className="auth--form-input_error">
                {error}
              </small>
            ))}
        </div>

        <div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Your password"
            />
          </div>
          {state?.errors?.password && (
            <small className="auth--form-input_error">
              <p>Password must:</p>
              <ul>
                {state.errors.password.map((error, index) => (
                  <li key={index}>- {error}</li>
                ))}
              </ul>
            </small>
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
