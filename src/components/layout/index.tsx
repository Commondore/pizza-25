import { Navbar } from "@/components/layout/navbar";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
