import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const width = 1280;
const height = 720;

// Green gradient SVG background
const svgBackground = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22" />
      <stop offset="50%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)" />
  <circle cx="200" cy="150" r="300" fill="#10b981" opacity="0.1" />
  <circle cx="1100" cy="600" r="400" fill="#34d399" opacity="0.1" />
  
  <text x="640" y="80" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="2">PROJECT PORTFOLIO</text>
</svg>
`;

async function createThumbnail() {
  const rootDir = path.join(__dirname, '..');
  const img1Path = path.join(rootDir, 'public', 'currency_converter_collection.png');
  const img2Path = path.join(rootDir, 'public', 'ai_task_collection.png');
  const outPath = path.join(rootDir, 'public', 'project_thumbnail.png');

  console.log('Generating thumbnail...');

  // Resize and format images to fit inside the thumbnail
  // Let's make them 540px wide and auto height (or vice versa), with a max height of 450
  const targetWidth = 500;
  const targetHeight = 450;

  const img1 = await sharp(img1Path)
    .resize({ width: targetWidth, height: targetHeight, fit: 'contain', background: {r:0,g:0,b:0,alpha:0} })
    .toBuffer();

  const img2 = await sharp(img2Path)
    .resize({ width: targetWidth, height: targetHeight, fit: 'contain', background: {r:0,g:0,b:0,alpha:0} })
    .toBuffer();

  const bgBuffer = Buffer.from(svgBackground);

  await sharp(bgBuffer)
    .composite([
      { input: img1, left: 100, top: 150 },
      { input: img2, left: 680, top: 150 }
    ])
    .toFile(outPath);

  console.log(`Thumbnail successfully saved to ${outPath}`);
}

createThumbnail().catch(console.error);
