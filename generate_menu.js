import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateMenu() {
  const inputPath = path.join(__dirname, 'public', 'Img', 'menu superior.png');
  const outputPath = path.join(__dirname, 'public', 'Img', 'menu superior com palavras.png');

  console.log('Reading from:', inputPath);

  const metadata = await sharp(inputPath).metadata();
  const width = metadata.width;
  const height = metadata.height;

  // 1. Extract clean wood patch from left to cover the center "BAARBERSHOP" text area
  const woodPatch = await sharp(inputPath)
    .extract({ left: 120, top: 40, width: 180, height: 130 })
    .toBuffer();

  const composites = [];
  for (let x = 260; x < 940; x += 170) {
    composites.push({
      input: woodPatch,
      left: x,
      top: 40
    });
  }

  // 2. Add SVG overlay with carved navigation words matching the user reference image:
  // INÍCIO | SERVIÇOS | [Skull in center] | BARBEIROS | AGENDAR | CONTATO
  const svgOverlay = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap');
          .carved-text {
            font-family: 'Cinzel', 'Times New Roman', serif;
            font-weight: 700;
            font-size: 24px;
            fill: #1a0f08;
            filter: drop-shadow(0px 2px 1px rgba(255, 215, 120, 0.3)) drop-shadow(0px -1px 1px rgba(0, 0, 0, 0.9));
            letter-spacing: 3px;
          }
        </style>
      </defs>
      
      <!-- INÍCIO -->
      <text x="18%" y="54%" text-anchor="middle" class="carved-text">INÍCIO</text>
      
      <!-- SERVIÇOS -->
      <text x="32%" y="54%" text-anchor="middle" class="carved-text">SERVIÇOS</text>
      
      <!-- BARBEIROS -->
      <text x="63%" y="54%" text-anchor="middle" class="carved-text">BARBEIROS</text>
      
      <!-- AGENDAR -->
      <text x="78%" y="54%" text-anchor="middle" class="carved-text">AGENDAR</text>
      
      <!-- CONTATO -->
      <text x="91%" y="54%" text-anchor="middle" class="carved-text">CONTATO</text>
    </svg>
  `;

  composites.push({
    input: Buffer.from(svgOverlay),
    top: 0,
    left: 0
  });

  await sharp(inputPath)
    .composite(composites)
    .toFile(outputPath);

  console.log('Menu image with carved words saved to', outputPath);
}

generateMenu().catch(console.error);
