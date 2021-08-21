// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var length = prompt("Please enter password length between 8 to 128 characters");
  while (isNaN(length)||length < 8 || length >128){
    alert("Please enter a numerical value or a value between 8 to 128 characters")
    length = prompt("Please enter password length between 8 to 128 characters")
  }

  var uppercase = confirm("Would you like uppercase letters?");
  var lowercase = confirm("Would you like lowercase letters?");
  var symbols = confirm ("Would you like symbols?");
  var numbers = confirm ("World you like numbers?"); 

  while (!uppercase && !lowercase && !symbols && !numbers){
    alert("Please choose one of the following characters.");
    uppercase = confirm("Would you like uppercase letters?");
    lowercase = confirm("Would you like lowercase letters?");
    symbols = confirm ("Would you like symbols?");
    numbers = confirm ("World you like numbers?"); 
  }

  var master = "";
  const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const low = "abcdefghijklmnopqrstuvwxyz";
  const num = "1234567890";
  const sym = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

  if (uppercase == true) {
    master += up
  }
  if (lowercase == true) {
    master += low
  }
  if (symbols == true) {
    master += num
  }
  if (numbers == true) {
    master += sym
  }

  for (let i = 0; i < length; i++) {
    password += master[Math.floor(Math.random() * master.length)];
  }


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
