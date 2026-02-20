#!/usr/bin/env node

/**
 * Copy production model files from model/ to static/model/ for deployment.
 * Only copies the files needed for production (ORT model, config, tokenizer).
 */

import { copyFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const modelDir = join(__dirname, '..', 'model');
const staticModelDir = join(__dirname, '..', 'static', 'model');

// Files to copy for production deployment
const filesToCopy = [
    'model.ort',
    'config.json',
    'tokenizer.json'
];

async function copyModelFiles() {
    console.log('📦 Copying production model files...');

    // Ensure static/model directory exists
    try {
        await mkdir(staticModelDir, { recursive: true });
    } catch (err) {
        // Directory already exists, that's fine
    }

    for (const file of filesToCopy) {
        const src = join(modelDir, file);
        const dest = join(staticModelDir, file);

        try {
            await copyFile(src, dest);
            console.log(`  ✓ Copied ${file}`);
        } catch (err) {
            if (err.code === 'ENOENT') {
                console.error(`  ✗ ${file} not found in model/ directory`);
                process.exit(1);
            } else {
                console.error(`  ✗ Error copying ${file}:`, err.message);
                process.exit(1);
            }
        }
    }

    console.log('✅ Production model files ready!');
}

copyModelFiles().catch(err => {
    console.error('Failed to copy model files:', err);
    process.exit(1);
});
