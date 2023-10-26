/* 
 * 
 * Javascript
 * 05 Task Performance 1 - FirstJavaScript.js
 * Fundamentals of Web Programming
 * 
 */

function firstJavaScript1() {

    let usrInput_Age = prompt("Enter your age: ");
    
    if ( usrInput_Age == null || usrInput_Age == "" ) {
        alert("No Input... enter something bro...");
    }
    
    if ( usrInput_Age != null || usrInput_Age == "" ) {
        
        if ( usrInput_Age >= 25 ) {
            alert("You are of age!\nYour age is above 24 years old!\nYay!");
        }
        
        if ( usrInput_Age < 25 ) {
            alert("You are not of age!\nGo home...");
        }

    }

}

function firstJavaScript2() {
    
    let usrInput_Number = prompt("Enter a number: ");

    if ( usrInput_Number == null || usrInput_Number == "" ) {
        alert("No Input... enter something bro...");
    }
    
    if ( usrInput_Number != null || usrInput_Number == "" ) {

        if ( usrInput_Number < 100 ) {
            alert("That number is less than 100!");
        }
        
        if ( usrInput_Number >= 100 ) {
            alert("Yo, enter a number that is less than 100 bruv...");
        }

    }
        
}