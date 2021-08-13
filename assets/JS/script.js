// Assignment Code
var generateBtn = document.querySelector("#generate");
var minLength = 8;
var maxLength = 128;

//  Potential password letters, numbers and symbols
var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";

// Prompts asking the user what they want in their password 
function generatePassword(){
  var passwordLength = window.prompt("how many characters do you want the password to be?")
  
  while(passwordLength < minLength || passwordLength > maxLength){
    passwordLength = prompt("Wrong password length, gimme something good:")
  }
  
  var possibleCharList = ""
  var lowersCheck = window.confirm("Do you want to include lowercase letters?")
  var uppersCheck = window.confirm("Do you want to include uppercase letters?")
  var numbersCheck = window.confirm("Do you want to include numbers?")
  var specialCharactersCheck = window.confirm("Do you want to include special characters?")

  // equivalent of saying if(lowersCheck == true)
  if(lowersCheck){
    possibleCharList += lowers
  }
  if(uppersCheck){
    possibleCharList += uppers
  }
  if(numbersCheck){
    possibleCharList += numbers
  }
  if(specialCharactersCheck){
    possibleCharList += specialCharacters
  }

  // console.log(possibleCharList, possibleCharList.length)
  var finalPass = ""

  for(i=0; i<passwordLength; i++){
    var randomIndex =  Math.floor(Math.random() * possibleCharList.length)
    var randomChar = possibleCharList[randomIndex]
    finalPass += randomChar
    console.log(randomIndex, randomChar)
  }

  return finalPass
}

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
