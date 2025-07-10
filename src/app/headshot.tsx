"use client";

import Image from "next/image";

const DIAMETER = 300;

export default function Headshot() {
  return (
    <div
      style={{
        borderRadius: "50%",
        overflow: "hidden",
        width: DIAMETER,
        height: DIAMETER,
        position: "relative",
      }}
    >
      <Image
        alt="Sam Reep"
        src="/sareep/headshot.jpeg"
        width={DIAMETER}
        height={DIAMETER}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
