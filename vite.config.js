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
            entry: path.resolve(__dirname, 'apps/plugins/src/editors/Substation.ts'),
            name: 'Substation',
            fileName: 'substation',
            formats: ['es']
        },
        rollupOptions: {
            external: [
                'lit',
                'lit-html',
                'lit-element',
                '@material/mwc-fab',
                '@material/mwc-dialog',
                '@material/mwc-button',
                "@material/mwc-formfield",
                "@material/mwc-icon",
                "@material/mwc-icon-button",
                "@material/mwc-icon-button-toggle",
                "@material/mwc-list",
                "@material/mwc-menu",
                "@material/mwc-select",
                "@material/mwc-switch",
                "@material/mwc-textarea",
                "@material/mwc-textfield",
                "@material/mwc-linear-progress",
                "@material/mwc-tab",
                "@material/mwc-tab-bar",
                "@material/mwc-top-app-bar-fixed",
            ],
            output: {
                inlineDynamicImports: true,
                globals: {
                    lit: 'lit',
                    'lit-html': 'litHtml',
                    'lit-element': 'LitElement'
                }
            }
        },
        target: 'esnext'
    }
});
