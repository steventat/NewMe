function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  window.location.href = "./questions.html";
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    window.location.href = "./index.html";
  });
}

function submitSlider1() {
  var slider1 = document.getElementById("slider1");
  var rating = slider1.value;
  var type = "";
  if(rating > 50) {
    type = "romantic";
  }
  else {
    type = "spontaneous";
  }
  console.log(type);
}

//Jquery
$(document).ready(function(){
});
