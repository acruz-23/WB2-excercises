//script to calc gross pay
//var declaration
var payRate, hoursWorked, basePay, overTimePay, totalPay;

//sample data
payRate = 17.30;
hoursWorked = 45;

//calc
if (hoursWorked > 40){
    basePay = 40 * payRate;
    overTimePay = (hoursWorked - 40) * (payRate * 1.5);
    totalPay = basePay + overTimePay;
}
else {
    totalPay = payRate * hoursWorked;
}

//output 
console.log(`For ${hoursWorked.toFixed(1)} hours worked and a pay rate of $${payRate.toFixed(2)}, gross pay is $${totalPay.toFixed(2)}.`)
