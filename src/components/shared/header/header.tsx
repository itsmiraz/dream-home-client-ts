import React, { useContext } from "react";
import logo from "/public/images/logos/dream-home-logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuthContextProvider } from "@/Context/userContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/authUtils";

const Header = () => {
  const { currentUser } = useContext(AuthContextProvider);

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex justify-between py-4 items-center">
      <div>
        <Link href={"/"}>
          <Image className="max-w-[200px]" src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="flex justify-center gap-x-8 link-text">
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>Services</p>
        </li>
        <li>
          <p>Property</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
      <ul className="flex justify-center items-center gap-x-4 ">
        {currentUser?._id ? (
          <>
            <li>
              <p>{currentUser?.name}</p>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image
                    src={currentUser?.profileImg}
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>
                    <button onClick={handleLogout}>Log Out</button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/auth/login"}>
                <Button variant="outline">Sign In</Button>
              </Link>
            </li>
            <li>
              <Link href={"/auth/register"}>
                <Button>Sign Up</Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
