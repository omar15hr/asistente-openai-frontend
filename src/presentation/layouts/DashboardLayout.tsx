import { Outlet } from "react-router";
import { menuRoutes } from "../router/router";
import { SidebarMenuItem } from "../components/sidebar/SidebarMenuItem";

export function DashboardLayout() {
  return (
    <main className="flex flex-row mt-7">
      <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-[#1C1C1C] bg-opacity-10 p-5 rounded-3xl">
        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
          ReactGPT<span className="text-indigo-500">.</span>
        </h1>
        <span className="text-xl">Bienvenido</span>

        <div className="border-gray-700 border my-3" />

        {/* Opciones del menú */}
        <div className="flex flex-col gap-2 mt-3">
          {menuRoutes.map((option) => (
            <SidebarMenuItem key={option.to} {...option} />
          ))}
        </div>
      </nav>

      <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)] bg-[#1C1C1C] bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}
