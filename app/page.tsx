"use client";
// import Link from "next/link";
// import ProductCard from "./components/ProductCard/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import ball from "@/public/tennis_ball.png";
import { Metadata } from "next";
import { useState } from "react";
// import HeavyComponent from "./components/HeavyComponent";
// import dynamic from "next/dynamic";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <div>Loading...</div>,
// });
// import _ from "lodash";

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <h1>Hello World!</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sortedUsers = _.orderBy(users, ["name"]);
          console.log(sortedUsers);
        }}
      >
        Show
      </button>
      {/* <button onClick={() => setVisible(true)}>Show</button> */}
      {/* {isVisible && <HeavyComponent />} */}
      {/* <Link href="/users">Users</Link> */}
      {/* <ProductCard /> */}
      {/* <HeavyComponent /> */}
      <Image
        src={ball}
        alt="Tennis ball"
        width="500"
        height="500"
        // fill
        // className="object-cover"
        sizes="(max-width: 640px) 100vw, 640px"
        quality={100}
        priority
      />
    </main>
  );
}

// export const metadata: Metadata = {
//   title: '...'
// }

// export async function generateMetada(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "product.description",
//   };
// }
