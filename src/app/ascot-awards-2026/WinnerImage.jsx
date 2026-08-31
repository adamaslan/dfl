"use client";
import { useState } from "react";

/**
 * Bottle image with a graceful fallback.
 *
 * Several of the source image URLs point at hosts that hotlink-block or no
 * longer serve the asset; without this the card renders a broken-image icon.
 */
export default function WinnerImage({ src, alt }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center rounded-md bg-gradient-to-b from-amber-100 to-amber-50 text-3xl">
        🥃
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="max-w-full max-h-full object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
