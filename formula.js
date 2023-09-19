function squareArea(sideLenght) {
  return sideLenght * sideLenght;
}

function squarePerimeter(sidelenght) {
  return 4 * sidelenght;
}

function rectangleArea(lenght, widht) {
  return lenght * widht;
}

function rectanglePerimeter(lenght, widht) {
  return 2 * (lenght + widht);
}

module.exports = {
  squareArea,
  squarePerimeter,
  rectangleArea,
  rectanglePerimeter,
};
