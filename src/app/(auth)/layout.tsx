import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="grid h-screen w-screen grid-cols-7">
      <div className="col-span-5 h-full p-12">{children}</div>
      <div className="bg-primary-500 col-span-2 h-full">
        <video className="h-full w-full object-cover" autoPlay muted loop src="/assets/videos/adly.mp4"></video>
      </div>
    </div>
  );
};

export default AuthLayout;
