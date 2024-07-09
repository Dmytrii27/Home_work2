
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

/*let guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
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
 
    const Ctemp = [0, 10, 20, 30, 40, 50];
     const Ctemp2 = Ctemp.map( (x) => x * 9 / 5 + 32);
    
    
    console.log(Ctemp2);

    const hideEvenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const evenNumbers = hideEvenNumbers.filter(function(element) {
      return element % 2 === 0;
});
console.log(evenNumbers);*/

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 58 },
  { name: 'Charlie', score: 92 },
  { name: 'David', score: 45 },
  { name: 'Eve', score: 70 },
  { name: 'Frank', score: 55 },
  { name: 'Grace', score: 60 }
];
console.log(students.filter(person => person.score >= 60 )
.map((student) => `${student.name}: ${student.score}`))


;



   

    