"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "./menus";

export default function BottomNavbar() {
  const pathName = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-gray-100 dark:bg-gray-900 shadow-md sm:hidden">
      <div className="flex justify-around items-center py-2">
        {menuItems.map((menu) => (
          <Link
            key={menu.id}
            href={menu.href}
            aria-label={`Navigate to ${menu.label}`} // Add a descriptive name
            className={`flex flex-col items-center text-sm font-medium ${
              pathName === menu.href
                ? "text-primary-500 dark:text-primary-400"
                : "text-gray-700 dark:text-gray-300 hover:text-primary-500"
            }`}
          >
            {/* Icon */}
            <div className="text-lg" aria-hidden="true">
              {menu.icon}
            </div>
            {/* Label */}
            <span className="sr-only">{menu.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
