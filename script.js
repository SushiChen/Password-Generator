// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  // Prompt shows up allowing for one to insert a value
  var length = prompt("Please enter password length between 8 to 128 characters");
  // while loop to check for numerical value and also length
  while (isNaN(length)||length < 8 || length >128){
    alert("Please enter a numerical value or a value between 8 to 128 characters")
    length = prompt("Please enter password length between 8 to 128 characters")
  }
// Opens comfirm prompts that allow for user to choose characters
  var uppercase = confirm("Would you like uppercase letters?");
  var lowercase = confirm("Would you like lowercase letters?");
  var symbols = confirm ("Would you like symbols?");
  var numbers = confirm ("World you like numbers?"); 
// If user doesn't choose any of the options it repeats and alerts them to select atleast one
  while (!uppercase && !lowercase && !symbols && !numbers){
    alert("Please choose one of the following characters.");
    uppercase = confirm("Would you like uppercase letters?");
    lowercase = confirm("Would you like lowercase letters?");
    symbols = confirm ("Would you like symbols?");
    numbers = confirm ("World you like numbers?"); 
  }
// constants for the uppercase,lowercase,numbers,and symbols
  var master = "";
  const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const low = "abcdefghijklmnopqrstuvwxyz";
  const num = "1234567890";
  const sym = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
// If statments checking if statments are true added to varible master
  if (uppercase == true) {
    master += up
  }
  if (lowercase == true) {
    master += low
  }
  if (symbols == true) {
    master += sym
  }
  if (numbers == true) {
    master += num
  }

  for (let i = 0; i < length; i++) {
    password += master[Math.floor(Math.random() * master.length)];
  }


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
