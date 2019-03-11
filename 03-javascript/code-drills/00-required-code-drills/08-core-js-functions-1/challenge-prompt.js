// define a function "fun" that console logs "Functions are FUN!"
function fun() { console.log("Functions are FUN!")}


// before moving on, open index.html and see what console logs have been made.
// why doesn't "Functions are FUN! appear yet?"
/*

the function has not been called yet

*/


// define a function "thirtySeven" that console logs the sum of 18 and 19
function thirtySeven(){ console.log(18 + 19)}


// call two functions you've defined so far
fun()
thirtySeven()

// define a function "log" that takes in an argument and console logs that argument
function log(ar) {
    console.log(ar)
  }


// define a function "hello" that calls on the "log" function to console log "Hello World"
function hello(){
    console.log("Hello world")
}


// call your "hello" function
hello()

// define a function "popUp" that creates an alert that says "This is an alert."
function popUp(){
    alert("This is an alert.")
}


// define a function "noPopUp" that creates an alert that says "Okay, you won't get a pop up."
function noPopUp(){
    alert("Okay, you won't get a pop up.")
}


// define a function "goodDay" that creates a confirm dialogue asking the user if they are having a nice day
// and uses your "log" function to display the response
function goodDay(){
    var reply = confirm("Having a nice day?")
    console.log(reply)
}


// call your "goodDay" function
goodDay()

// define a function "userPopUp" that creates a confirm dialogue asking the user if they would like a popup
// if they answer yes, call upon your "popUp" function; otherwise, call upon your "noPopUp" function
function userPopUp(){
    var want = confirm("want a popup?")
    if(want){
        popUp()
    }
    else{
        noPopUp()
    }
}


// call your "userPopUp" function
userPopUp()

// define a function "userName" that prompts the user for their name and then 
// uses your "log" function to display the response
function userName(){
    var name = prompt("What's your name?")
    console.log(name)
}


// call your "userName" function
userName()

// define a function "favoriteFruit" that prompts the user for their favorite fruit
// and the creates an alert that displays the response
function favoriteFruit(){
    var fav = prompt("favorite fruit?")
    alert(fav)
}


// call your "favoriteFruit" function
favoriteFruit()


