"use client";
import { useGlobalContext } from "@/ContextApi";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const ProfileUser = () => {
  const { user } = useUser();
  const imageUrl = user?.imageUrl;

  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const loadingImage = (
    <div className="mb-[5px] h-9 w-9 rounded-full bg-slate-100"></div>
  );
  const loadingUserName = (
    <span className="h-4 w-[100px] rounded-md bg-slate-100"></span>
  );
  const loadingUserEmail = (
    <span className="h-2 w-[130px] rounded-md bg-slate-100"></span>
  );

  return (
    <div className="flex items-center gap-3">
      {!user ? (
        loadingImage
      ) : (
        <div>
          <Image
            src={imageUrl || ""}
            width={40}
            height={40}
            alt="Profile Picture"
            className="rounded-full"
          />
        </div>
      )}
      <div
        className={`flex flex-col text-sm max-md:hidden ${!user ? "gap-1" : ""}`}
      >
        {!user ? (
          loadingUserName
        ) : (
          <span
            className={`font-semibold text-slate-900 ${darkMode[1].isSelected ? "text-slate-100" : "text-slate-900"}`}
          >
            {user?.fullName}
          </span>
        )}
        {!user ? (
          loadingUserEmail
        ) : (
          <span className="text-[11px] text-slate-500">
            {user?.emailAddresses[0].emailAddress}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfileUser;
