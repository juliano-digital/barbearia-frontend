import sharp from 'sharp';

async function processImage() {
  const inputPath = 'barbershop-app/public/Img/menu superior.png';
  const outputPath = 'barbershop-app/public/Img/menu superior sem texto.png';

  // Let's extract a clean wood texture sample from the left area (e.g., x: 120, y: 35, width: 200, height: 140)
  // and composite it over the center area where "BAARBERSHOP" is (e.g. starting around x: 250, y: 30)
  
  // Actually, let's extract a patch, resize/tile it or place it across the center.
  const woodPatch = await sharp(inputPath)
    .extract({ left: 120, top: 40, width: 180, height: 130 })
    .toBuffer();

  // We can create multiple overlays or one wide patch if needed, or extract a wider area and blur edges or composite.
  // Even better, let's extract a clean area from x: 100 to 300, and composite it at x: 260, y: 35, etc.
  
  // Let's test placing patches to cover the text from x: 260 to 940.
  const composites = [];
  for (let x = 260; x < 940; x += 170) {
    composites.push({
      input: woodPatch,
      left: x,
      top: 40
    });
  }

  await sharp(inputPath)
    .composite(composites)
    .toFile(outputPath);

  console.log('Processed image saved to', outputPath);
}

processImage().catch(console.error);
