// Firebase Chat

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  // -------------------- Your Code Here --------------------
  database.ref().on("child_added", function (snapshot) {
    var text = $("<p>")
    text.text($("#chat-input").val().trim())
    $("#chat-display").append(text)
  })

  
  
 

  // --------------------- End Code Area --------------------

})

