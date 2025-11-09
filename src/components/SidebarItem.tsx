// SidebarItem.tsx
import React, { useState } from "react";
import type { SidebarItemProps } from "./types";
import { RiArrowLeftSLine } from "react-icons/ri";

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, subItems }) => {
  //   const isDefaultActive: boolean = label === "Services";
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    if (subItems) {
      setIsOpen(!isOpen);
    }
  };

  const baseClasses: string =
    "flex items-center justify-between p-3 cursor-pointer text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded";

  return (
    <div>
      {/* Main Link/Header */}
      <div className={`${baseClasses} font-semibold`} onClick={handleClick}>
        <div className="flex items-center space-x-3">
          <span className="text-xl">{icon}</span>
          <span>{label}</span>
        </div>
        {subItems && (
          <span className="text-xs">
            {isOpen ? (
              <RiArrowLeftSLine className="rotate-90 text-xl" />
            ) : (
              <RiArrowLeftSLine className="-rotate-90 text-xl" />
            )}
          </span>
        )}
      </div>

      {/* Submenu */}
      {subItems && isOpen && (
        <div className="bg-transparent font-semibold">
          {subItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 pl-12 text-white rounded-md hover:bg-gray-50 hover:text-black transition-all duration-300 ease-in-out"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
