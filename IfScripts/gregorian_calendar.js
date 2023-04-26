//Script to determine if a given year is a leap year 
//leap years are divisible by 4 except end-of-century (eoc) years which must be divisible by 400 

//var declaration
var year;

//sample data
year= 2024;

//calc and output
if (year % 4 == 0 && !(year % 100 == 0))  { //cannot calc eoc years on same line, too messy
    console.log(`${year} is a leap year!`)
} else if (year % 400 == 0){                   //handles all eoc years. 
    console.log(`${year} is a leap year!`)
} else{    
    console.log(`${year} is not a leap year.`)
}
