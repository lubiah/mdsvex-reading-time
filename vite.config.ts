import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {  
            name: "mdsvex-reading-time",
            fileName: "mdsvex-reading-time",
            entry: resolve(__dirname, "src/index.ts")
        },
        minify: "esbuild",
        rollupOptions: {
            external: ["reading-time","unist-util-visit"]
        },
        watch: {}
    },
    plugins: [dts()]
})