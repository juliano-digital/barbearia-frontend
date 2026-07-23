import sharp from 'sharp';

async function run() {
  const meta1 = await sharp('barbershop-app/public/Img/letras piratas.png').metadata();
  console.log('letras piratas:', meta1);
  const meta2 = await sharp('barbershop-app/public/Img/menu superior.png').metadata();
  console.log('menu superior:', meta2);
}
run().catch(console.error);
