"use client";

import Image from "next/image";


export default function Headshot() {
  return (
    <div
      style={{
        borderRadius: "50%",
        overflow: "hidden",
        width: "100%",
        maxWidth: 300,
        aspectRatio: "1 / 1",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <Image
        alt="Sam Reep"
        src="/sareep/headshot.jpeg"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 300px) 100vw, 300px"
      />
    </div>
  );
}
