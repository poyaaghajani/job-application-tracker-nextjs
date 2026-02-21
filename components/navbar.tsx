import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const NavBar = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>

        <div className="space-x-2">
          <Link href={"/sign-in"}>
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Login
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className=" hover:bg-primary/90">Start for free</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
