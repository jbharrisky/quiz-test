
//function to run for question 1 when button is pushed

function checkAnswer1() {
  //declaring the the paragraph element as an object to style depending on how user answers.
let obj1 = document.getElementById("answer1");

//if statement to make decision based on user answer.
if (document.getElementById("four").checked || document.getElementById("two").checked) {
  // if wrong asnwers are checked, reply will be styled in bold red.
  document.getElementById("answer1").innerHTML = "Please read again. Slow down, take your time!";
  obj1.setAttribute("style", "color: red; font-size: 1.5rem; font-weight: bold")
}else if(document.getElementById("six").checked){
  // if correct answer is checked, reply will be styled in bold green.
  document.getElementById("answer1").innerHTML = "That's correct, well done!";
  obj1.setAttribute("style", "color: green; font-size: 1.5rem; font-weight: bold");
}
};


//function to run for question 1 when button is pushed
function checkAnswer2() {
  //declaring the the paragraph element as an object to style depending on how user answers.
let obj2 = document.getElementById("answer2");
if (document.getElementById("blue").checked || document.getElementById("green").checked){
  // if wrong asnwers are checked, reply will be styled in bold red.
  document.getElementById("answer2").innerHTML = "Please read again. Slow down, take your time!";
  obj2.setAttribute("style", "color: red; font-size: 1.5rem; font-weight: bold")
} else if (document.getElementById("red").checked){
  // if correct answer is checked, reply will be styled in bold green.
  document.getElementById("answer2").innerHTML = "That's correct, great job!";
  obj2.setAttribute("style", "color: green; font-size: 1.5rem; font-weight: bold");
}
}

//function to run for question 1 when button is pushed
function checkAnswer3() {
  //declaring the the paragraph element as an object to style depending on how user answers.
  let obj3 = document.getElementById("answer3");
  if(document.getElementById("fiveCubs").checked || document.getElementById("sevenCubs").checked){
    // if wrong asnwers are checked, reply will be styled in bold red.
    document.getElementById("answer3").innerHTML = "Please read again. Slow down, take your time!";
    obj3.setAttribute("style", "color: red; font-size: 1.5rem; font-weight: bold");
  } else if (document.getElementById("fourCubs").checked){
    // if correct answer is checked, reply will be styled in bold green.
    document.getElementById("answer3").innerHTML = "That's correct, great job!";
    obj3.setAttribute("style", "color: green; font-size: 1.5rem; font-weight: bold");
  }
}

//function to run for question 1 when button is pushed
function checkAnswer4() {
  //declaring the the paragraph element as an object to style depending on how user answers.
  let obj4 = document.getElementById("answer4");
  if(document.getElementById("eightRooms").checked || document.getElementById("fourRooms").checked){
    // if wrong asnwers are checked, reply will be styled in bold red.
    document.getElementById("answer4").innerHTML = "Please read again. Slow down, take your time!";
    obj4.setAttribute("style", "color: red; font-size: 1.5rem; font-weight: bold");
  }else if(document.getElementById("sixRooms").checked){
    // if correct answer is checked, reply will be styled in bold green.
    document.getElementById("answer4").innerHTML = "That's correct, great job!";
    obj4.setAttribute("style", "color: green; font-size: 1.5rem; font-weight: bold");
  }
}
