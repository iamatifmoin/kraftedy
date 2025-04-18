"use client";

import { Loader2 } from "lucide-react";

export default function Spinner({ size = 20 }: { size?: number }) {
  return (
    <Loader2
      className="animate-spin text-white"
      style={{ width: size, height: size }}
    />
  );
}
