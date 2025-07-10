"use client";

import Image from "next/image";

export default function Headshot() {
  return (
    <div
      style={{
        borderRadius: "50%",
        overflow: "hidden",
        width: 250,
        height: 250,
        position: "relative",
      }}
    >
      <Image
        alt="Sam Reep"
        src="/sareep/headshot.jpeg"
        width={250}
        height={250}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
