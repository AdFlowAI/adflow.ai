import Link from "next/link";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 w-screen py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="font-medium">Adly.ai</p>
        <div className="flex items-center gap-x-4"></div>
        <div className="flex items-center gap-x-4">
          <Button asChild size="sm" variant="outline">
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
