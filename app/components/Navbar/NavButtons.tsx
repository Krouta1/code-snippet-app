import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const NavButtons = async () => {
  const { userId } = auth();

  return (
    <div className="flex gap-2 max-sm:mt-8 max-sm:w-3/5 max-sm:flex-col">
      {userId ? (
        <>
          <Link
            href="my-notes"
            className={`cursor-pointer rounded-md bg-primary p-[8px] px-6 text-center text-sm text-white max-sm:w-full`}
          >
            Access To The App
          </Link>
        </>
      ) : (
        <>
          {" "}
          <Link
            href="sign-in"
            className={`cursor-pointer rounded-md bg-primary p-[8px] px-6 text-center text-sm text-white max-sm:w-full`}
          >
            Sign In
          </Link>
          <Link
            href="sign-up"
            className={`cursor-pointer rounded-md border border-primary p-[8px] px-6 text-center text-sm text-primary transition-colors hover:bg-primary hover:text-white`}
          >
            Sign Up
          </Link>{" "}
        </>
      )}
    </div>
  );
};

export default NavButtons;
