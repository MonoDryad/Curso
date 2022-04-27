// let point = {}
// let point2 = {x:2, y:4}

// console.log(point, point2);

// point.x = 4444444

// console.log(point);

// -- 11 -- || -- 22 -- \\

let point = new Object({x:2})
console.log(point);

let point2 = Object.create({x:2,y:2.3})
console.log(point2.x + point2.y)