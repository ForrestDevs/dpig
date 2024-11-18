"use client";

import React, { useEffect, useState } from "react";

export default function VideoEmbed() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full mx-auto md:max-w-none h-full flex items-center justify-center min-h-[600px]">
        <blockquote
          className="tiktok-embed h-full"
          cite="https://www.tiktok.com/@mjaymgee/video/7411388988478459179"
          data-video-id="7411388988478459179"
          style={{
            maxWidth: "605px",
            minWidth: "325px",
            height: "100%",
          }}
        >
          <section></section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>
    )
  );
}
