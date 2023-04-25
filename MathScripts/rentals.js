//var
var people, totalVanCost, costPerVan, numberOfVans, entryFee, peoplePerVans;

//sample data
people= 38;
costPerVan = 250;
peoplePerVans = 15;

//calc
numberOfVans = Math.ceil(people / peoplePerVans);
totalVanCost = numberOfVans * costPerVan;
entryFee = (totalVanCost / people).toFixed(2);

//output
console.log(`If ${people} people are attending, charge $${entryFee} per person. The total cost to rent ${numberOfVans} vans is $${totalVanCost}.` )
console.log(`At $${entryFee} per person, the total collected is $${(people * entryFee).toFixed(2)}. Which means we collected an extra $${((people * entryFee)-750).toFixed(2)}. This is due to rounding the amount charged per person.`)

