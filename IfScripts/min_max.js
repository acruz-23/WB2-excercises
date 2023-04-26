//finds the largest and smallest number out of 3 values. does not use Math.min or Math.max

//var declaration
var a,b,c;

//sample data
a = 3;
b = 1;
c = 3;

//calc largest value and output
console.log("a:",a);
console.log("b:",b);
console.log("c:",c);
if ( a >= b && a >= c) {
    if (a == b && a ==c){
        console.log("a,b,c are the largest values with a value of:", a);
    }else if ( a==b ){
        console.log("a and b are the largest values with a value of:", a);
    }else if (a == c){
        console.log("a and c are the largest values with a value of:", a);
    }else {
        console.log("a is the largest value with a value of:", a);
    }
} else if ( b >= a && b >= c) {
    if (b == a && b ==c){
        console.log("a,b,c are the largest values with a value of:", b);
    }else if ( b==a ){
        console.log("b and a are the largest values with a value of:", b);
    }else if (b == c){
        console.log("b and c are the largest values with a value of:", b);
    }else {
        console.log("b is the largest value with a value of:", b);
    }
} else if ( c >= a && c >= b) {
    if (c == a && c == b){
        console.log("a,b,c are the largest values with a value of:", c);
    }else if ( c==a ){
        console.log("c and a are the largest values with a value of:", c);
    }else if (c == b){
        console.log("c and b are the largest values with a value of:", c);
    }else {
        console.log("c is the largest value with a value of:", c);
    }
} else {
    console.log("There was a logic error")
}

//calc smallest value and output
if ( a <= b && a <= c) {
    if (a == b && a ==c){
        console.log("a,b,c are the smallest values with a value of:", a);
    }else if ( a==b ){
        console.log("a and b are the smallest values with a value of:", a);
    }else if (a == c){
        console.log("a and c are the smallest values with a value of:", a);
    }else {
        console.log("a is the smallest value with a value of:", a);
    }
} else if ( b <= a && b <= c) {
    if (b == a && b ==c){
        console.log("a,b,c are the smallest values with a value of:", b);
    }else if ( b==a ){
        console.log("b and a are the smallest values with a value of:", b);
    }else if (b == c){
        console.log("b and c are the smallest values with a value of:", b);
    }else {
        console.log("b is the smallest value with a value of:", b);
    }
} else if ( c <= a && c <= b) {
    if (c == a && c == b){
        console.log("a,b,c are the smallest values with a value of:", c);
    }else if ( c==a ){
        console.log("c and a are the smallest values with a value of:", c);
    }else if (c == b){
        console.log("c and b are the smallest values with a value of:", c);
    }else {
        console.log("c is the smallest value with a value of:", c);
    }
} else {
    console.log("There was a logic error")
}