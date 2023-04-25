//At a x % interest rate, your savings accoubt will be worth y in z years
// var interest, principle, worth, years;

//sample data
var interest = 7;
var principal = 10000;

//calc
var years = 72 / interest;
var worth = principal * 2;

//output
console.log("At a " + interest + "% interest rate, your savings account will be worth $"+ worth.toFixed(2) +" in "+ years.toFixed(1) +" years");
 
