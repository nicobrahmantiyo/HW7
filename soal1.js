const calculator = require('./formula');

async function main() {
  const squaresideLenght = 5;
  const rectanglelenght = 6;
  const rectanglewidht = 4;

  try {
    const squarearea = await calculator.squareArea(squaresideLenght);
    const squareperimeter = await calculator.squarePerimeter(squaresideLenght);

    const rectanglearea = await calculator.rectangleArea(rectanglelenght, rectanglewidht);
    const rectangleperimeter = await calculator.rectanglePerimeter(rectanglelenght, rectanglewidht);

    console.log('Luas persegi:', squarearea);
    console.log('Keliling persegi:', squareperimeter);
    console.log('Luas persegi panjang:', rectanglearea);
    console.log('Keliling persegi panjang:', rectangleperimeter);
  } catch (error) {
    console.log('Terjadi kesalahan:', error);
  }
}
main();
