

// document.ready makes sure the javascript doesn't load before the html page
$(document).ready(function () {

    // Write a series of on click listeners for each letter in the html
    // Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
    // You will need to set up an on click listener for each letter
    //
    // Within the document, set an on click listener for the element with a class of "letterA"
    
        for(i=0; i<letters.length; i++){
            $(document).on("click", (".letter" + i), function (){
            var letters = ["A", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            $("#text-div").append(i)
        })
    
        // When that element is clicked, append the string "A" to the `text-div` element

        
    // Within the document, set an on click listener for the element with a class of "letterB"

    
        // When that element is clicked, append the string "B" to the `text-div` element

        
    // Continue for the other letters




        
})
