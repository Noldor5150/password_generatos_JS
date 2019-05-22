

let submitButton = document.getElementById("submit");

submitButton.addEventListener('click', event => {
 let password = document.getElementById("password").value;
 let service = document.getElementById("service").value;
 let generatedPassword = passwordGenerator(password, service);
 let paragraph = document.createElement ("p");
 paragraph.textContent = generatedPassword;
 clearList();
 document.getElementById("safeplace").appendChild(paragraph);
  console.log(password);
  console.log(service);
});

function clearList() {
  document.getElementById("safeplace").innerHTML = " ";
};

function countVowels (string){
  let countVowel = 0;
  for(let i = 0; i< string.length; i++) {
  let newStr = string[i].toLowerCase()
  if (newStr === "a" || newStr === "e" || newStr === "i" || newStr === "o" 
  || newStr === "u"|| newStr === "y") {
  countVowel++;
    }
  }
    return countVowel-1;
};

function countNonVowels (string){
  let countNonVowel = 0;
  for(let i = 0; i< string.length; i++) {
  let newStr = string[i].toLowerCase()
  if (newStr === "q" || newStr === "w" || newStr === "r" || newStr === "t" 
  || newStr === "p"|| newStr === "p"|| newStr === "p"|| newStr === "p"
  || newStr === "s"|| newStr === "d"|| newStr === "f"|| newStr === "g"|| newStr === "h"
  || newStr === "j"|| newStr === "k"|| newStr === "l"|| newStr === "z"|| newStr === "x"
  || newStr === "c"|| newStr === "v"|| newStr === "b"|| newStr === "n"|| newStr === "m") {
  countNonVowel++;
    }
  }
    return countNonVowel;
};

function passwordGenerator(pass, service){
  let password =[];
  let string = service.split('');
  password.push (string.pop());
  let vowels = countVowels (service);
  password.push(string[vowels]);
  password.push(pass);
  let nonVowels = countNonVowels(service);
  password.push(nonVowels);
  password.push (string[0]);
  return password = password.join("");
  };
  