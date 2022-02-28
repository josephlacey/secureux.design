import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkGfm],
  },
});

const config = withMDX({
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "",
  pageExtensions: ["ts", "tsx", "mdx"],
});

export default config;
