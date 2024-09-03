import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className=" flex flex-row bg-neutral-100">
        <div className="bg-sky-200">sidebar</div>
        <div className="bg-teal-200">header</div>
        <div>{Outlet}</div>
        <p>footer</p>
      </div>
    </>
  );
};

export default Layout;
