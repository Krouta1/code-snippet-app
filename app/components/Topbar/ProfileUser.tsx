"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const ProfileUser = () => {
  const { user } = useUser();
  const imageUrl = user?.imageUrl;

  const loading = (
    <div className="mb-[5px] h-9 w-9 rounded-full bg-slate-200"></div>
  );

  return (
    <div className="flex items-center gap-3">
      {!user ? (
        loading
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
      <div className="flex flex-col text-sm">
        <span className="font-semibold text-slate-900">{user?.fullName}</span>
        <span className="text-[11px] text-slate-500">
          {user?.emailAddresses[0].emailAddress}
        </span>
      </div>
    </div>
  );
};

export default ProfileUser;
