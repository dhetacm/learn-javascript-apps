console.log("Shape Calculator");

console.log("Count the area and perimeter of a Square");

const calculateSquareArea = side => side ** 2;
const calculateSquarePerimeter = side => side * 4;

const resultSquareArea = calculateSquareArea(6);
const resultSquarePerimeter = calculateSquarePerimeter(8);

console.log(resultSquareArea);
console.log(resultSquarePerimeter);

console.log("Count the area and perimeter of a Rectangle");

const calculateRectangleArea = (width, height) => width * height;
const calculateRectanglePerimeter = (width, height) => 2 * (width + height);

const resultRectangleArea = calculateRectangleArea(5, 7);
const resultRectanglePerimeter = calculateRectanglePerimeter(5, 7);

console.log(resultRectangleArea);
console.log(resultRectanglePerimeter);

console.log("Count the area and perimeter of a Triangle");

const calculateTriangleArea = (base, height) => (base / 2) * height;
const calculateTrianglePerimeter = (base, height, side) => base + height + side;

const resultTriangleArea = calculateTriangleArea(10, 3);
const resultTrianglePerimeter = calculateTrianglePerimeter(3, 7, 15);

console.log(resultTriangleArea);
console.log(resultTrianglePerimeter);
