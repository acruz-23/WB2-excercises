//monthly taxes w/ tax rate of 23%
//vars
var monthlySalary, taxesPercent, taxesDecimal, taxesPaid;

//sample data
monthlySalary = 5_003;
taxesPercent = 23;

//calc
taxesDecimal = taxesPercent / 100;
taxesPaid = (monthlySalary * taxesDecimal).toFixed(2);

//output
console.log("$" + taxesPaid + `, taxes paid per month with a monthly tax rate of ${taxesPercent}%` )