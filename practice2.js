
 let num = 0;

  if (num > 0) {
    console.log("Positive");
  }
  else if (num == 0) {
    console.log("Zero");}
else {
  console.log("Negative");
}




function printEvenNumbers() {
  for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
}
printEvenNumbers();

function countdown(i) {
  
  answer = '';
  while( i >= 0) {
     answer = answer + i.toString() + ' ';
     i--;
     console.log(i);
  }
  return answer;
 
  
}


countdown(4);

let guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
if (guess > 10) {
  alert("Reed rules again");
  console.log(parseInt(prompt("Guess a number between 1 and 10: "), 10));
}
else if (guess == 10)
  alert("You won");
else {
  alert("Try again!");
  console.log(parseInt(prompt("Guess a number between 1 and 10: "), 10));
  alert("Try again!");
}
function myFunction() {
  document. getElementById("demo"). innerText = 'You have clicked';
  }

