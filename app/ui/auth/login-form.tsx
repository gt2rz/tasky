"use client";

const LoginForm = () => {
  return (
    <section className="container mx-auto">
      <form className="flex flex-col space-y-4">
        <div>
          <div className="relative">
            <input
              type="email"
              autoComplete="off"
              placeholder="you@site.com"
              className="auth--form-input ps-11"
            />
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <input
              type="password"
              autoComplete="off"
              placeholder="password"
              className="ps-11"
            />
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path>
                <circle cx="16.5" cy="7.5" r=".5"></circle>
              </svg>
            </div>
          </div>
        </div>
        <button type="submit" className="btn-primary" aria-label="Acceder">
          Acceder
        </button>

        
      </form>
    </section>
  );
};

export default LoginForm;
