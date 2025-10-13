/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
      { protocol: "https", hostname: "cdn.pixabay.com", pathname: "**" },
      { protocol: "https", hostname: "www.crowdedkitchen.com", pathname: "**" },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.eatingwell.com",
        pathname: "**",
      },
      { protocol: "https", hostname: "www.simplyrecipes.com", pathname: "**" },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
