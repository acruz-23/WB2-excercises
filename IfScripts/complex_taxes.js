//determines federal taxes based on annual gross income and filing status

//var declaration
var taxRate, filingStatus, weeklyGrossPay, payRate, hoursWorked, basePay, overTimePay, annualIncome;

//sample data
payRate = 17.30;
hoursWorked = 45;
annualIncome = 20_000;
filingStatus = single;

//calc tax rate
if (annualIncome <  12_000) {
    if (filingStatus ==)
}

//calc pay
if (hoursWorked > 40){
    basePay = 40 * payRate;
    overTimePay = (hoursWorked - 40) * (payRate * 1.5);
    weeklyGrossPay = basePay + overTimePay;
}
else {
    weeklyGrossPay = payRate * hoursWorked;
};