// Sidebar.tsx
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import type { NavigationItem } from "./types";
import { RiArrowLeftSLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";

import Logo from "../assets/logo.png";

const navigationItems: NavigationItem[] = [
  { icon: <LuLayoutDashboard />, label: "Dashboard" },
  {
    icon: <CiCalendar />,
    label: "Services",
    subItems: [
      { label: "IT Consulting" },
      { label: "Cloud Solutions" },
      { label: "Mobile Apps" },
    ],
  },
  { icon: "🔔", label: "Notifications" },
  { icon: "📖", label: "Resources" },
  {
    icon: "⭐",
    label: "Bookmarks",
    subItems: [
      { label: "Saved Tutorials" },
      { label: "Favorite Blogs" },
      { label: "Resource Guides" },
    ],
  },
  { icon: "⚙️", label: "Extensions" },
  { icon: "🛠️", label: "Settings" },
];

const Sidebar: React.FC = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col h-screen ${
        isCollapse ? "w-[70px]" : "w-64"
      } bg-[#151a2d] shadow-xl border p-3 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`flex ${
          isCollapse ? "flex-col gap-5" : "justify-between p-4"
        } items-center pt-6 transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center space-x-2">
          {/* <div className="w-6 h-6 bg-white clip-path-triangle"></div> */}
          <img
            src={Logo}
            alt="logo"
            className={`${isCollapse ? "w-full" : "w-12"} h-12 rounded-full`}
          />
        </div>

        <button
          onClick={() => {
            setIsCollapse(!isCollapse);
          }}
          className="bg-gray-50 text-white rounded w-7 h-7 flex items-center justify-center text-sm shadow-md"
        >
          {isCollapse ? (
            <RiArrowLeftSLine className="text-black text-2xl rotate-180" />
          ) : (
            <RiArrowLeftSLine className="text-black text-2xl" />
          )}
        </button>
      </div>

      <nav className="flex flex-col grow mt-4 overflow-y-scroll scrollbar-hide">
        {navigationItems.map((item: NavigationItem, index: number) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            subItems={item.subItems}
          />
        ))}
      </nav>

      <div className="border-t border-gray-800 mt-auto py-4">
        <button
          type="button"
          className="w-full flex items-center gap-3 font-semibold text-lg text-white hover:bg-white hover:text-black p-3 transition-all duration-300 rounded-md hover:cursor-pointer"
        >
          <PiSignOut className="text-xl" />
          {!isCollapse && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
