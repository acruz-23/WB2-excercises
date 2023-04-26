//takes major code and displays a students major name and department office, if have an invalid major code display unknown

//var declaration
var studentName, studentMajor;
 
//sample data
studentName = "Betty";
studentMajor = "CSCI";


//calc of output
studentMajor = studentMajor.toLowerCase();
if (studentMajor == "biol"){
    console.log("Student:", studentName);
    console.log("Major: Biology");
    console.log("Advising Location: Science Bldg, Room 310.")
}else if (studentMajor == "csci"){
    console.log("Student:", studentName);
    console.log("Major: Computer Science");
    console.log("Advising Location: Sheppard Hall, Room 314.")
}else if (studentMajor == "eng"){
    console.log("Student:", studentName);
    console.log("Major: English");
    console.log("Advising Location: Kerr Hall, Room 201.")
}else if (studentMajor == "hist"){
    console.log("Student:", studentName);
    console.log("Major: History");
    console.log("Advising Location: Kerr Hall, Room 114.")
}else if (studentMajor == "mkt"){
    console.log("Student:", studentName);
    console.log("Major: Marketing");
    console.log("Advising Location: Westly Hall, Room 310.")
}else {
    console.log("Student:", studentName);
    console.log("Major: <unknown>");
    console.log("Advising Location:")
}