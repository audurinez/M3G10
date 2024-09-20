"use strict"

type persons ={
    name: string;
    dateOfBirth: string;
    children: number;
    country: string;
    knowsHowToProgram: boolean;
 }

const employers:persons[] =[
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


]

// Output how many children all people have in total 


for (let i=0; i < employers.length; i++) // we put length to call info on everyone in the array
    {
        console.log( employers[i].name + " has " + employers[i].children + " children" );
   
    }


 // Output one string per person formatted as such name:age
// First we have to calculate the age of our employers

function calculateAge(birthDate: Date): number {
    const today = new Date(); // this is todays date - leaving () empty calls the current 
    let age = today.getFullYear() - birthDate.getFullYear(); // here we diff the current date the birth date in years
    const monthDifference = today.getMonth() - birthDate.getMonth(); // here we get more precise and calculate the month
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) { 
      age--;
    } // if the birthdate has not happend yet if will subtract one year from the persons age
    
    return age;
  }



 for (let i=0; i < employers.length; i++) 
    {
        const birthDate = new Date(employers[i].dateOfBirth); // calling the birthdate
        const age = calculateAge(birthDate) //calling the calculate age function
        console.log(`- ${employers[i].name}: ${age} years old`); // output how old the person is
   
    }

// Output all properties of all people using for


let i =0

if (employers[i].knowsHowToProgram == true) {

    console.log("Yes");
    
}

else {

    console.log("No");
    
}



for (let i=0; i < employers.length; i++) 
    {
    let result;
    if (employers[i].knowsHowToProgram == true) {

        result="Yes";
        
    }
    
    else {
    
        result="No";
        
    }
    
    console.log(
        "* Name: " + employers[i].name +
        "* Birth Date: " + employers[i].dateOfBirth +
        "* Children: " + employers[i].children +
        "* Country: " + employers[i].country +
        "* Can program: " + result
        );

    
    }












