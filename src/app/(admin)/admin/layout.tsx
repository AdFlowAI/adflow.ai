import React from "react";

import { Header, Sidebar } from "@/components/shared";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <Sidebar type="admin" />
      <div className="">
        <Header />
        <div className="h-[calc(100%-56px)] w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
