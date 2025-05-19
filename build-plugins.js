import { build, defineConfig } from 'vite';
import path from 'path';
import { readdir, stat } from 'fs/promises';
import { existsSync, rmSync } from 'fs';

const root = process.cwd();
const distDir = path.resolve(root, 'dist');
const pluginTypes = ['editors', 'menu', 'validators', 'wizards'];

function clearDistFolder(dir) {
    if (existsSync(dir)) {
        rmSync(dir, { recursive: true, force: true });
        console.log(`Cleared output directory: ${dir}`);
    } else {
        console.log(`Output directory does not exist, so no clearing needed: ${dir}`);
    }
}

async function buildAll() {
    clearDistFolder(distDir);

    for (const pluginType of pluginTypes) {
        const folderPath = path.resolve(root, 'apps/plugins/src', pluginType);

        // Check if the current plugin type folder exists.
        try {
            await stat(folderPath);
        } catch (error) {
            console.warn(`Source folder does not exist for plugin type "${pluginType}" at: ${folderPath}`);
            continue;
        }

        // Read the contents of the folder.
        let entries;
        try {
            entries = await readdir(folderPath);
        } catch (error) {
            console.error(`Error reading folder at ${folderPath}:`, error);
            continue;
        }

        // Filter for TypeScript files.
        const tsFiles = entries.filter(file => file.endsWith('.ts'));

        // Process each TypeScript file.
        for (const file of tsFiles) {
            const filePath = path.resolve(folderPath, file);
            const baseName = path.basename(file, '.ts');
            const pluginName = `${baseName.charAt(0).toUpperCase()}${baseName.slice(1)}Plugin`;
            const outFileName = baseName.toLowerCase();

            const config = defineConfig({
                build: {
                    lib: {
                        entry: filePath,
                        name: pluginName,
                        fileName: () => `${pluginType}/${outFileName}.js`,
                        formats: ['es'],
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
                            "@material/mwc-textfield"
                        ],
                        output: {
                            inlineDynamicImports: true,
                            globals: {
                                lit: 'lit',
                                'lit-html': 'litHtml',
                                'lit-element': 'LitElement'
                            }
                        },
                    },
                    target: 'esnext',
                    emptyOutDir: false,
                    configFile: false,
                },
                resolve: {
                    alias: {
                        '@openscd/open-scd': path.resolve(root, 'libs/openscd/open-scd'),
                        '@openscd/core': path.resolve(root, 'libs/openscd/core'),
                        '@openscd/xml': path.resolve(root, 'libs/openscd/xml/src'),
                    },
                },
            });

            console.log(`📦 Building Plugin ${pluginName} from ${pluginType}/${file}...`);
            await build(config);
            console.log(`✅ Built: ${pluginType}/${outFileName}.js`);
        }
    }
}

buildAll();
