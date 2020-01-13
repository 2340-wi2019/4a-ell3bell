$(document).ready(function() {
    $('#action').click(function() {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        var myFavoriteThings = [];
            myFavoriteThings.push("My cats");   
            myFavoriteThings.push("My Silas"); 
            myFavoriteThings.push("My books/research"); 
            myFavoriteThings.push("My friends"); 

        //Write your decision structure between this comment...
        if (letterGrade == "A") {
            $('#decision-holder').append("Grade range for A: 90% to 100%");
        } else if (letterGrade == "B"){
            $('#decision-holder').append("Grade range for B: 80% to 90%");
        } else if (letterGrade == "C"){
            $('#decision-holder').append("Grade range for C: 70% to 80%");
        } else if (letterGrade == "D"){
            $('#decision-holder').append("Grade range for D: 60% to 70%");
        } else if (letterGrade == "F"){
            $('#decision-holder').append("Grade range for F: 60% or less");
        } else {
            $('#decision-holder').append("Error! Invalid value entered.");
        }
        //...and this comment

        //Now, write a for, while, OR do-while loop between this comment...
        for (var i = 0; i < myFavoriteThings.length; i++){
            $('#loop-output').append(myFavoriteThings[i] + "<br>")
            }
        
        //...and this comment


        //Use the jQuery .each() method to loop through
        //the myFavoriteThings array between this comment...
        $.each(myFavoriteThings, function(index, favoriteThing){
            $("#each-output").append(favoriteThing + "<br>");
        })   
        //...and this comment

    }); 
});