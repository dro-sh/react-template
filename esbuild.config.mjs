import esbuild from "esbuild";
import serve, { error, log } from "create-serve";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MODE = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 8001;

esbuild
  .build({
    entryPoints: ["src/index.tsx"],
    bundle: true,
    outfile: "public/dist/app.js",
    minify: MODE === "production",
    sourcemap: true,
    incremental: MODE === "development",
    target: ["chrome58", "firefox57", "safari11", "edge18"],
    define: {
      "process.env.NODE_ENV": `"${MODE}"`,
    },
    inject: [path.join(__dirname, "/react-shim.js")],
    watch: MODE === "development" && {
      onRebuild(err) {
        serve.update();
        err ? error("❌ Failed") : log("✅ Updated");
      },
    },
  })
  .catch(() => process.exit(1));

if (MODE === "development") {
  serve.start({
    port: PORT,
    root: "./public",
    live: true,
  });
}
