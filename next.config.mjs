import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";

const withNextIntl = createNextIntlPlugin();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "build",
  sassOptions: {
    includePaths: [path.join(__dirname, "src/scss")],
    prependData: `
      @import "variables";
      @import "font";
      @import "animation";
      @import "function";
    `,
  },
};

export default withNextIntl(nextConfig);
