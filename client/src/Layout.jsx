import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="py-4 px-4 flex flex-col w-full items-center justify-center">
      <Header />
      <Outlet />
    </div>
  );
}
