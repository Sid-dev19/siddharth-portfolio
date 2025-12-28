import type { NextConfig } from "next"
// import withBundleAnalyzer from "@next/bundle-analyzer"

// const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repository = 'portfolio-austin-serb-main';

const nextConfig: NextConfig = {
  basePath: isGithubActions ? `/${repository}` : '',
  assetPrefix: isGithubActions ? `/${repository}/` : '',
  experimental: { viewTransition: true },
  allowedDevOrigins: ["localhost:3000"],

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

// export default withAnalyzer(nextConfig)

export default nextConfig
