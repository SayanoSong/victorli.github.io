import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
const nextConfig: NextConfig = {
  /* config options here */
  /*
  async redirects() {
    return [
      //Home page
      {
        source: '/portfolio',
        destination: '/',
        permanent: true,
      }
    ]
  }*/

  output: "export",
  basePath: "/victorli.github.io",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    if (!isServer) {
      config.resolve.fallback.fileSystem = false;
    }

    return config;
  },
};
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
