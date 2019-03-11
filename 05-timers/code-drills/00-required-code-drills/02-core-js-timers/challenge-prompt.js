// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function question1 () {
    alert("Question 1");
  }
  
  setTimeout(question1, 5000)


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
function question2 () {
    alert("Question 2");
  }
  
  setTimeout(question2, 15000)


// Remove the timer you just made for Question 2
clearTimeout(question2)


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
function question3_1 () {
    alert("Question 3 part 1");
  }
  
  setTimeout(question3_1, 15000)



// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
function question3_2 () {
    alert("Question 3 part 2");
  }
  
  setTimeout(question3_2, 16000)


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(question3_1)



console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
function question5 () {
    console.log("Question 5 completed");
  }
  setTimeout(question5, 11000)
