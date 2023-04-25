//output "Your net worth is x"
var totalAssets, totalLiabilities, netWorth ;

//sample input
totalAssets = 100000;
totalLiabilities = 50000;
netWorth = totalAssets - totalLiabilities;
var netWorthPrint = netWorth.toString()


// for (i=0; i < netWorth % 3; i -=3) {
//    netWorthPrint = netWorthPrint.slice(-1, -4 + i) + "," ;
// }

//output
console.log("Your net worth is $" + netWorth);
// console.log("$" +netWorthPrint)