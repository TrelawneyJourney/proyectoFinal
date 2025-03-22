import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
type Props = {
  children?: ReactNode;
};
function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      {/**si existe la propiedad de children, la renderiza */}
      <div>{children ?? <Outlet />}</div>
    </div>
  );
}

export default Layout;
