//var
var length, width, floorArea,  tileAreaPerBox, boxesNeeded, extratilesPercent, extratilesDecimal, totalTileSA;

//sample data
length = 13;
width = 19;
tileAreaPerBox = 12; 
extratilesPercent = 10;



//calc
//since each tile is 1 square foot tiles needed = SA. Total Floor Area * 1.1 = desired # of tiles
extratilesDecimal = extratilesPercent/100;
floorArea = length * width;
totalTileSA = floorArea * (1 + extratilesDecimal);
boxesNeeded = Math.ceil(totalTileSA / tileAreaPerBox);

//output
console.log(boxesNeeded + " Boxes needed.")


