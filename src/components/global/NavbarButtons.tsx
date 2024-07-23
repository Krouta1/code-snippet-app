import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

type NavbarButtonsProps = {};

const NavbarButtons = async (props: NavbarButtonsProps) => {
  const { userId } = auth();
  return (
    <div className="max-sm:w-full">
      {userId ? (
        <button className="rounded-md bg-primary p-[8px] px-6 text-sm text-white max-sm:w-full">
          <Link href={"/my-notes"}>Access to the app</Link>
        </button>
      ) : (
        <div className="flex gap-2 max-sm:mt-8 max-sm:w-3/5 max-sm:flex-col">
          <Link href={"/sign-in"}>
            <button className="rounded-md bg-primary p-[8px] px-6 text-sm text-white max-sm:w-full">
              Sign In
            </button>
          </Link>

          <Link href={"/sign-up"}>
            <button className="rounded-md border border-primary p-[8px] px-6 text-sm text-primary hover:bg-primary hover:text-white max-sm:w-full">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarButtons;
