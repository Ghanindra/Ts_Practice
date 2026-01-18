// Q1
function calculateArea(shape, data) {
    if (shape === "square") {
        var square = data;
        return square.side * square.side;
    }
    var circle = data;
    return (22 / 7) * circle.radius * circle.radius;
}
var c = calculateArea("square", { side: 5 });
var r = calculateArea("circle", { radius: 7 });
console.log(c, r);
