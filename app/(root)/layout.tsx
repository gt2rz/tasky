import React, { ReactNode } from "react";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return <main className="w-full min-h-screen flex flex-col">{children}</main>;
};

export default LandingLayout;
