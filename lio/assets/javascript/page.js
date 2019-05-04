//Initialize Firebase that will hold email/password data - this is directly from firebase
var config = {
    apiKey: "AIzaSyC-RhLBykiCKR36KvA6374fK2F-AhEqGqQ",
    authDomain: "project-d83ed.firebaseapp.com",
    databaseURL: "https://project-d83ed.firebaseio.com",
    projectId: "project-d83ed",
    storageBucket: "project-d83ed.appspot.com",
    messagingSenderId: "162056553843",
    appId: "1:162056553843:web:f514a50333cc4cea"
};
// Initialize Firebase
firebase.initializeApp(config);

//variable that is specifically for the firebase database
var database = firebase.database();

//variables for the items that I need
var email = "",
    password = ""

//getting the DOM loaded/rendered
$(document).ready(function() {
   initializeEventHandlers();
});

function initializeEventHandlers() {
    //click login button
    $("#submit-login").click(function(){
        event.preventDefault();

        //assign variables to the email and password to pass into firebase
        var email = $("#email-input").val().trim();
        var password = $("#password-input").val().trim()

        //if either of the boxes (email/password) is blank, will not continue
        if ($("#email-input").val().trim() === "" ||
            $("#password-input").val().trim() === ""){
            }else {}
                database.ref().push({
                    email:email,
                    password:password
            })

        $("#email-input").val("");
        $("#password-input").val("");
        //redirect to the uploads_page once the submit-login button is selected
        //THIS IS WHERE THE SPECIFIC PAGE WE ARE SWITCHING TO GOES (IN THE QUOTES)
        window.location.href="upload.html";

    });

};
//console.log to ensure that the email and password are captured
database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().password);

        var email = childSnapshot.val().email;

        $("#email-input").text(email);
});