import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  pageType: "home" | "app";
}
const Navbar = ({ pageType }: NavbarProps) => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          AuraNetworks
        </div>
        {pageType === "home" && (
          <Link href={"/app"}>
            <button className="bg-blue-600 text-white px-5 sm:px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Go to App <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
