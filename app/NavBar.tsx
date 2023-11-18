"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {status === "authenticated" && (
        <div>
          {session?.user?.name}
          <Link href="/api/auth/signout" className="ml-5">
            Logout
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
      {/* align image to the right end */}
      <Image
        className="flex-end"
        src="https://platform.clientchatlive.com/operators-chat/assets/images/logo.webp"
        alt="ccl logo"
        width="100"
        height="100"
      />
    </div>
  );
};

export default NavBar;
