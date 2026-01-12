// build.js
import { build as viteBuild } from "vite";
import { build as esbuild } from "esbuild";
import { rm, readFile } from "fs/promises";

const allowlist = [
  "@google/generative-ai",
  "axios",
  "express",
  "cors",
  "pg",
  "stripe",
  "jsonwebtoken",
  "uuid",
  "nanoid",
  // add other server deps as needed
];

async function build() {
  try {
    // Remove old dist
    await rm("dist", { recursive: true, force: true });
    console.log("Old dist/ folder cleared.");

    // Build client (Vite) → put directly into dist
    console.log("Building client with Vite...");
    await viteBuild({
      build: {
        outDir: "dist",
        emptyOutDir: true,
      },
    });

    // Build server (esbuild) → output to dist/server
    console.log("Building server with esbuild...");
    const pkg = JSON.parse(await readFile("package.json", "utf-8"));
    const allDeps = [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ];
    const externals = allDeps.filter((dep) => !allowlist.includes(dep));

    await esbuild({
      entryPoints: ["server/index.ts"],
      bundle: true,
      platform: "node",
      format: "cjs",
      outfile: "dist/server/index.cjs",
      external: externals,
      minify: true,
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      logLevel: "info",
    });

    console.log("✅ Build complete! Dist folder ready for Netlify.");
  } catch (err) {
    console.error("❌ Build failed:", err);
    process.exit(1);
  }
}

build();

