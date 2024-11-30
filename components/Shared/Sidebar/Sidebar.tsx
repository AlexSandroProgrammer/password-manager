import { Logo } from "../Logo";
import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
  return (
    <>
      <div className="py-6">
        {/* //* componente del logo */}
        <Logo />
      </div>
      {/* //* componente para llamar todas las rutas del sidebar */}
      <SidebarRoutes />
    </>
  );
}
