//displays a message depending on time of day

//var declaration
var hour;

//sample data
hour = 10.5; //hous in 24hr format

//calc
if (hour < 10){
    console.log("Good morning!")
}else if (hour >= 10 && hour < 17) {
    console.log("Good day!")    
}else {
    console.log("Good evening!")
}

