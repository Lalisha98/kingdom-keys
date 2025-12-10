// build.js
import { build as viteBuild } from "vite";
import { build as esbuild } from "esbuild";
import { rm, readFile } from "fs/promises";

// List of dependencies to keep external for server build
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function build() {
  try {
    // 1️⃣ Remove old dist folder
    await rm("dist", { recursive: true, force: true });
    console.log("Old dist/ folder cleared.");

    // 2️⃣ Build client with Vite
    console.log("Building client with Vite...");
    await viteBuild({
      build: {
        outDir: "dist",
        emptyOutDir: true,
      },
    });

    // 3️⃣ Build server with esbuild
    console.log("Building server with esbuild...");
    const pkg = JSON.parse(await readFile("package.json", "utf-8"));
    const allDeps = [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ];
    const externals = allDeps.filter((dep) => !allowlist.includes(dep));

    await esbuild({
      entryPoints: ["server/index.ts"], // update if server file is elsewhere
      bundle: true,
      platform: "node",
      format: "cjs",
      outfile: "dist/index.cjs",
      external: externals,
      minify: true,
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      logLevel: "info",
    });

    console.log("✅ Build complete! Dist folder created.");
  } catch (err) {
    console.error("❌ Build failed:", err);
    process.exit(1);
  }
}

// Run the build
build();
