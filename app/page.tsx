"use client";

import dynamic from "next/dynamic";

const MapsApp = dynamic(() => import("./components/MapsApp"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-full">
      <MapsApp />
    </main>
  );
}
