   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

var user = firebase.auth().currentUser;

if (user) {
		var email = user.email;
   var div = document.getElementById("demo-container");
   div.innerHTML += 'hello';
   $( "div.demo-container" ).html(function() {
  var emphasis = "<em>" + $( "p" ).length + " paragraphs!</em>";
  return "<p>All new content for " + emphasis + "</p>";
});
} else {
  // No user is signed in.
  		var email = user.email;
   var div = document.getElementById("demo-container");
   div.innerHTML += 'hello';
   $( "div.demo-container" ).html(function() {
  var emphasis = "<em>" + $( "p" ).length + " paragraphs!</em>";
  return "<p>All new content for " + emphasis + "</p>";
});
}

/*
$( "div.demo-container" ).html(function() {
  var emphasis = "<em>" + $( "p" ).length + " paragraphs!</em>";
  return "<p>All new content for " + emphasis + "</p>";
});
*/