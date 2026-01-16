"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { ADMIN_ROUTES, DASHBOARD_ROUTES } from "@/config/routes";
import { cn, normalize } from "@/lib";

interface Props {
  type: "admin" | "dashboard";
}

export const Sidebar = ({ type }: Props) => {
  const routes = type === "admin" ? ADMIN_ROUTES : DASHBOARD_ROUTES;
  const pathname = usePathname();

  const isOnPath = (href: string) => href === normalize(pathname);

  return (
    <aside className="h-full w-[285px] border-r">
      <div className="flex h-14 w-full items-center border-b px-4">
        <p className="text-lg font-semibold">Adflow.ai</p>
      </div>
      <div className="h-[calc(100%-56px)] w-full p-4">
        <div className="space-y-4">
          {routes.map(({ href, icon: Icon, label }, index) => (
            <Link
              className={cn(
                "flex items-center gap-x-4 rounded-md px-3 py-2 text-sm",
                isOnPath(href) ? "text-primary-500" : "text-gray-500 hover:bg-gray-300",
              )}
              href={href}
              key={index}
            >
              <Icon className="size-5" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
