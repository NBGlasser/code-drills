// `this` jQuery Business

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here
  var buttonsVal = ["hello", "world", "clear"];
  for(i=0; i<buttonsVal.length; i++){
    var newButton = $("<button>");
    newButton.addClass("button-class");
    newButton.text(buttonsVal[i])
    newButton.attr("data-name", buttonsVal[i]);
    $("#buttons-area").append(newButton);
    
}




  // End of your code area
}

// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we defined above.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  document.onkeyup = function(event) {
    // Your code goes here
    var newButton = $("<button>");
    newButton.addClass("button-class");
    newButton.text((this).val())
    newButton.attr("data-name", ((this).val()));
    $("#user-buttons-area").append(newButton);






    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here
    if(((this).val()) !=== "clear"){
      $("#output").append((this).val());
    }
    else{
      $("#output").text = ""
    };






    // End of your code area
  });

});
