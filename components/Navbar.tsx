import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex max-w-2xl mx-auto px-4 py-5 relative items-center w-full justify-between">
      <Link href="/" className="font-bold text-3xl">
        Op<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
