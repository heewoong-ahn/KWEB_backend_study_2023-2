const circularShapes = require("./circular-shapes");
const { getCylinderSurfaceArea } = require("./circular-shapes"); //모듈 일부 가져오기.

const r = 10;
const h = 20;
console.log(`Surface Area of Cylinder = ${getCylinderSurfaceArea(r, h)}`);

const path = require("path");

const c = circularShapes.getCircleArea(3);
console.log(c);
console.log(`${c}`);

console.log(path.dirname("./circular-shapes.js"));
console.log(path.dirname("./circular-shapes.js"));
console.log(path.basename("./circular-shapes.js"));
