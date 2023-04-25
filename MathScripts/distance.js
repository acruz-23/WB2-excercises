//sqrt((x1-x2)^2 + (y2-y1)^2)
var x1, x2, y1, y2, distance;

//sample data
x1 = 5;
x2 = 10;
y1 = -5;
y2 = 5;

//calc
distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));

//output 
console.log("X1:", x1)
console.log("X2:", x2);
console.log("Y1:", y1);
console.log("Y2:", y2);
console.log("Distance:", distance);