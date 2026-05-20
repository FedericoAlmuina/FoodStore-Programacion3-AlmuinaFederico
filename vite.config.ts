import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

// ✅ Definir __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                storeHome: resolve(__dirname, "src/pages/store/home/home.html"),
                storeCart: resolve(__dirname, "src/pages/store/cart/cart.html"),
            },
        },
    },
    base: "./",
});
