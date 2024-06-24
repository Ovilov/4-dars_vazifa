import { NavLink, Outlet } from "react-router-dom";
import BreadCrums from "../components/BreadCrums";
function RootLayout() {
  return (
    <>
      <nav className=" flex m-auto gap-3 items-center text-base-content p-2">
        <h1 className="mr-auto">My Articles</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <BreadCrums />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
