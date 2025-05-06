"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

interface NavigationItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, link, icon }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link}
      className={`flex p-4 items-center w-full hover:bg-gray-700 font-medium${
        pathName === link ? " bg-gray-600 border-r-4 border-r-green-500" : ""
      }`}
    >
      <div className="mr-2">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};

export default NavigationItem;
