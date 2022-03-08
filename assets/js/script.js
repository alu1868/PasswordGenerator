// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Character pool
const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const number = ['1','2','3','4','5','6','7','8','9','0'];
const special = ['!','@','#','$','%','^','&','*','(',')','_','-',',','=','+','`','~','<','>','.','/','?',';',':'];


// Function to decide character types
function parameters() {

  var passwordParameters = [''];

  var lengthInput = window.prompt('How long would you like your password to be?', 8)
  // if false, return back to input
  if (lengthInput < 8 || lengthInput > 128 || isNaN(lengthInput)){
    alert('must enter a number between 8 and 128');
    return generatePassword();
  }

  // Do you want lower case letters?
  var lowerInput = confirm('Would you like lower case letters in your password?');
    // add lower case array to final array
    if (lowerInput) {
      passwordParameters = passwordParameters.concat(lowercase);
    }

  // Do you want upper case letters?
  var upperInput = confirm('Would you like upper case letters in your password?');
    // add uppercase array to the final array
    if (upperInput) {
      passwordParameters = passwordParameters.concat(uppercase);
    }

  // Do you want numbers?
  var numInput = confirm('Would you like numbers in your password?');
    // add number array to the final array
    if (numInput) {
      passwordParameters = passwordParameters.concat(number);
    }

  // Do you want special characters?
  var specialInput = confirm('Would you like special characters in your password?');
    // add special array to the final array
    if (specialInput) {
      passwordParameters = passwordParameters.concat(special);
    }

    // turn these into global variables
    lengthOfPassword = lengthInput;
    key = passwordParameters;
    
 };



// function that is called upon when button pressed
function generatePassword() {

  var lengthInput = lengthOfPassword;
  var passwordParameters = key;
  // test to make sure array works
  console.log('this is the pool:' + passwordParameters);
  console.log('this is the lengthInput:' + lengthInput);
  var arrayPassword = [""];
  // run until we meet the lengthInput
  for (var i = 0; i < lengthInput; i++) {
    // generates a random number from 0 to the length of the string of passwordParameters
    var random = Math.floor(Math.random() * passwordParameters.length);
    // attaches array to blank password, until for loop is done
    arrayPassword = arrayPassword.concat(passwordParameters[random]);
    console.log(arrayPassword)
  }
  var finalPassword = arrayPassword.join("");
  console.log(finalPassword)
  return finalPassword;
}


 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
parameters();