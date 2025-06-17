import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_LINK_DOWNLOAD: process.env.LINK_DOWNLOAD,
  },
};

export default nextConfig;
