// Special, numeric, lower, upper case characters section

var specialCharacters = [
  "~","!","#","$","%","^","&","*","(",")","+","-",";","@","_","/","\\"
];

var numericCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",

];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// ----------------------------------------------------------------

function getPasswordOption(){
  var length = parseInt(prompt("How many characters do you want your password to have"),10)

  if(Number.isNaN(length)){
    alert("Password must be provided as a number");
  }

  if(length < 8){
    alert("Password lenght must be at least 8 characters");
    return null;
  }

  if(length > 128){
    alert("Password lenght must be at least 128 characters");
    return null;
  }

  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  )

  var hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  )

  var hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  )

  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
    ) {
      alert("Must select a least one character type");
      return null;
    }

    var PasswordOptions = {
      length: length, 
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    }
    return PasswordOptions;

}

// ---------------------------------------------------------------------------

function getRamdom(arr){
  var ramdomIndex = Math.floor(Math.random()* arr.length);
  var ramdomElement = arr[ramdomIndex];
  return ramdomElement;
}


// -----------------------------------------------------------------------------

// Generate Function
function generatePassword(){
  var option = getPasswordOption();
  var results = [] 

  var possibleCharacters = []


  var guaranteedCharacters = [];

  if(!option) return null;

  if(option.hasSpecialCharacters){
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRamdom(specialCharacters));
  }

  if(option.hasNumericCharacters){
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedCharacters.push(getRamdom(numericCharacters));
  }

  if(option.hasLowerCasedCharacters){
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    guaranteedCharacters.push(getRamdom(lowerCasedCharacters));
  }

  if(option.hasUpperCasedCharacters){
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
    guaranteedCharacters.push(getRamdom(upperCasedCharacters));
  }

  for(var index = 0; index < option.length; index++){
    var possibleCharacter = getRamdom(possibleCharacters);
    results.push(possibleCharacter);
  }

  for(var index = 0; index < guaranteedCharacters.length; index++){
    results[index] = guaranteedCharacters [index];
  }

  return results.join("")
}

// ------------------------------------------------------------------------------

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
