//determines federal taxes based on annual gross income and filing status

//var declaration
var taxRateDecimal, filingStatus, overtimeThreshold, weeklyTaxWithholdings, weeklyNetPay, weeklyGrossPay, payRate, hoursWorked, basePay, overTimePay, annualGrossPay;

//sample data
payRate = 10;
hoursWorked = 45;
filingStatus = "Single";
overtimeThreshold = 40;

//calc Gross pay
if (hoursWorked > overtimeThreshold){                     //overtime :)
    basePay = overtimeThreshold * payRate;
    overTimePay = (hoursWorked - overtimeThreshold) * (payRate * 1.5);
    weeklyGrossPay = basePay + overTimePay;
}
else {
    weeklyGrossPay = payRate * hoursWorked;               //no overtime.
}
annualGrossPay = weeklyGrossPay * 52;

//calc tax rate
if (annualGrossPay <  12_000) {
    if (filingStatus == "Single") {
        taxRateDecimal = .05;
    }
    if (filingStatus == "Joint"){
        taxRateDecimal = 0;
    }
}else if (annualGrossPay < 25_000) {
    if (filingStatus == "Single") {
        taxRateDecimal = .10;
    }
    if (filingStatus == "Joint"){
        taxRateDecimal = .06;
    }
}else if (annualGrossPay < 75_000){
    if (filingStatus == "Single") {
        taxRateDecimal = .15;
    }
    if (filingStatus == "Joint"){
        taxRateDecimal = .11;
    }
}else {
    if (filingStatus == "Single") {
        taxRateDecimal = .2;
    }
    if (filingStatus == "Joint"){
        taxRateDecimal = .2;
    }
}

//calc weekly net pay
weeklyTaxWithholdings = weeklyGrossPay * taxRateDecimal;
weeklyNetPay = weeklyGrossPay - weeklyTaxWithholdings;

//output
console.log("You worked", hoursWorked.toFixed(1), "hours this period.");
console.log("Because you earn $" + payRate.toFixed(2), "per hour, your gross pay this week is $" + weeklyGrossPay.toFixed(2) + ".");
console.log("Your filing status is", filingStatus + ".");
console.log("Your tax witholdings this period is $" + weeklyTaxWithholdings.toFixed(2)+ "." );
console.log("Your net pay is $" + weeklyNetPay.toFixed(2) +".");
