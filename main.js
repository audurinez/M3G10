"use strict";
var employers = [
    {
        name: "Milka Sherman",
        dateOfBirth: "3/31/1978",
        children: 0,
        country: "China",
        knowsHowToProgram: false,
    },
    {
        name: "Crista O'Lennachain",
        dateOfBirth: "9/7/1984",
        children: 1,
        country: "China",
        knowsHowToProgram: true,
    },
    {
        name: "Dreddy Glossup",
        dateOfBirth: "11/5/1985",
        children: 5,
        country: "Indonesia",
        knowsHowToProgram: false,
    },
    {
        name: "Joelly De Cruz",
        dateOfBirth: "8/9/1956",
        children: 5,
        country: "Ecuador",
        knowsHowToProgram: true,
    },
    {
        name: "Leif Cattrell",
        dateOfBirth: "3/4/1988",
        children: 0,
        country: "Finland",
        knowsHowToProgram: true,
    },
    {
        name: "Damien Gawthorpe",
        dateOfBirth: "4/16/1974",
        children: 0,
        country: "Japan",
        knowsHowToProgram: false,
    },
    {
        name: "Vi Symmers",
        dateOfBirth: "9/3/1997",
        children: 0,
        country: "Russia",
        knowsHowToProgram: false,
    },
    {
        name: "Muffin Whitwell",
        dateOfBirth: "4/10/1978",
        children: 2,
        country: "El Salvador",
        knowsHowToProgram: false,
    },
    {
        name: "Konstance Gubbins",
        dateOfBirth: "12/17/1958",
        children: 4,
        country: "Venezuela",
        knowsHowToProgram: true,
    },
    {
        name: "Gavan Colkett",
        dateOfBirth: "4/24/1962",
        children: 2,
        country: "Ivory Coast",
        knowsHowToProgram: false,
    }
];
// Output how many children all people have in total 
for (var i_1 = 0; i_1 < employers.length; i_1++) // we put length to call info on everyone in the array
 {
    console.log(employers[i_1].name + " has " + employers[i_1].children + " children");
}
// Output one string per person formatted as such name:age
// First we have to calculate the age of our employers
function calculateAge(birthDate) {
    var today = new Date(); // this is todays date - leaving () empty calls the current 
    var age = today.getFullYear() - birthDate.getFullYear(); // here we diff the current date the birth date in years
    var monthDifference = today.getMonth() - birthDate.getMonth(); // here we get more precise and calculate the month
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    } // if the birthdate has not happend yet if will subtract one year from the persons age
    return age;
}
for (var i_2 = 0; i_2 < employers.length; i_2++) {
    var birthDate = new Date(employers[i_2].dateOfBirth); // calling the birthdate
    var age = calculateAge(birthDate); //calling the calculate age function
    console.log("- ".concat(employers[i_2].name, ": ").concat(age, " years old")); // output how old the person is
}
// Output all properties of all people using for
var i = 0;
if (employers[i].knowsHowToProgram == true) {
    console.log("Yes");
}
else {
    console.log("No");
}
for (var i_3 = 0; i_3 < employers.length; i_3++) {
    var result = void 0;
    if (employers[i_3].knowsHowToProgram == true) {
        result = "Yes";
    }
    else {
        result = "No";
    }
    console.log("* Name: " + employers[i_3].name +
        "* Birth Date: " + employers[i_3].dateOfBirth +
        "* Children: " + employers[i_3].children +
        "* Country: " + employers[i_3].country +
        "* Can program: " + result);
}
