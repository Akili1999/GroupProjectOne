var firebaseConfig = {
    apiKey: "AIzaSyC-RhLBykiCKR36KvA6374fK2F-AhEqGqQ",
    authDomain: "project-d83ed.firebaseapp.com",
    databaseURL: "https://project-d83ed.firebaseio.com",
    projectId: "project-d83ed",
    storageBucket: "project-d83ed.appspot.com",
    messagingSenderId: "162056553843",
    appId: "1:162056553843:web:f514a50333cc4cea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var email = "";
    password = ""

$("#submit-login").click(function(){
    event.preventDefault();

    email = $("#email-input").val().trim();
    password = $("#password-input").val().trim()

    if ($("#email-input").val().trim() === "" ||
        $("#password-input").val().trim() === ""){
            alert("Please provide an email and password.")
        } else {}
            database.ref().push({
                email:email,
                password:password
        })

    $("#email-input").val("");
    $("#password-input").val("");

});
