import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            // Point to the root of the 'open-scd' package
            '@openscd/open-scd': path.resolve(__dirname, 'libs/openscd/open-scd'),
            '@openscd/core': path.resolve(__dirname, 'libs/openscd/core'),
            '@openscd/xml': path.resolve(__dirname, 'libs/openscd/xml/src'),
            '@openscd/plugins': path.resolve(__dirname, 'libs/oscd-official-plugins/plugins')
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'apps/plugins/src/editors/Sitipe.ts'),
            name: 'Sitipe',
            fileName: 'sitipe',
            formats: ['es']
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
            }
        },
        target: 'esnext'
    }
});
