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

    $("#submit-login").click(function(){
        event.preventDefault();

        var email = $("#email-input").val().trim();
        var password = $("#password-input").val().trim()

        if ($("#email-input").val().trim() === "" ||
            $("#password-input").val().trim() === ""){
                alert("Please provide an email and password.")
            }else {}
                database.ref().push({
                    email:email,
                    password:password
            })

        $("#email-input").val("");
        $("#password-input").val("");
        window.location.href="upload_page.html";

    });

};

database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().password);
});