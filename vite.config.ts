import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/ine.fitm.kmutnb.ac.th/",
    plugins: [
        svelte(),
        WindiCSS()
    ],
    resolve: {
        alias: {
        }
    }
});
