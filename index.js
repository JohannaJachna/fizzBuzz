
var submit = $('.submit');
submit.on("click", fizzBuzz);

function fizzBuzz(userInput){
  var userInput = $('.userInput').val();
if (userInput%5==0 && userInput%3==0){
    alert("Fizz Buzz");
    console.log("Fizz Buzz");
}else if (userInput%3==0){
  alert("Fizz");
  console.log("Fizz");
}else if (userInput%5==0){
  alert("Buzz");
  console.log("Buzz");
} else {
  alert(`${userInput}`)
  console.log(`${userInput}`);
}
}
