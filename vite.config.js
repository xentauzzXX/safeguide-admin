import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    build: {
        outDir: "dist",
        emptyOutDir: true, // Bersihkan folder build sebelum proses baru
        manifest: true, // Penting untuk Laravel agar manifest.json dihasilkan
        rollupOptions: {
            input: ["resources/css/app.css", "resources/js/app.js"], // File utama yang di-build
        },
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
});
